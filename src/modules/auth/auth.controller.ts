import { Controller, Post, Body } from '@nestjs/common';
import { Public } from '../../security/decorators';

import { AuthService } from './auth.service';
import { LoginDto, LoginResponseDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @Public()
  async createUser(@Body() loginDto: LoginDto): Promise<LoginResponseDto> {
    return await this.authService.login(loginDto);
  }
}
