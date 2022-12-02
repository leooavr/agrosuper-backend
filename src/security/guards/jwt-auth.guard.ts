import {
  ExecutionContext,
  Injectable,
  CanActivate,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const ctx = context.switchToHttp().getRequest();

    if (!ctx.headers.authorization) {
      return false;
    }

    const { user } = await this.validateToken(ctx.headers.authorization);
    ctx.req.user = { ...user };

    return true;
  }

  async validateToken(auth: string): Promise<any> {
    if (auth.split(' ')[0] !== 'Bearer') {
      throw new HttpException('Invalid Token', HttpStatus.UNAUTHORIZED);
    }
    const token = auth.split(' ')[1];
    try {
      return await jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      throw new HttpException('Invalid Token', HttpStatus.UNAUTHORIZED);
    }
  }
}
