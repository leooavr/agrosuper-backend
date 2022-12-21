import {
  ExecutionContext,
  Injectable,
  CanActivate,
  Inject,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthService } from '../../modules/auth/auth.service';
import { auth } from '../../utils/constants';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    @Inject(AuthService)
    private readonly authService: AuthService,
    private readonly reflector: Reflector,
  ) {}
  async canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.get<boolean>(
      'isPublic',
      context.getHandler(),
    );
    if (isPublic) return true;

    const ctx = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();

    const { access_token: accessToken, refresh_token: refreshToken } =
      ctx.headers;

    if (!accessToken) {
      return false;
    }

    const [isAccessToken, isRefreshToken] = await this.validateTokens(
      accessToken,
      refreshToken,
    );

    if (!isAccessToken && !isRefreshToken) {
      return false;
    }

    if (!isAccessToken) {
      const { user } = await this.authService.decodeToken(refreshToken);
      const credentials = await this.authService.refreshCredentials(user);
      response.setHeader('Access-Control-Expose-Headers', '*');
      response.setHeader(auth.refresh_token, credentials.refreshToken);
      response.setHeader(auth.access_token, credentials.accessToken);
    }

    return true;
  }

  async validateTokens(
    accessToken: string,
    refreshToken: string,
  ): Promise<[boolean, boolean]> {
    return Promise.all([
      this.authService.validateToken(accessToken),
      this.authService.validateToken(refreshToken),
    ]);
  }
}
