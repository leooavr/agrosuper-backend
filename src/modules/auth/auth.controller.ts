import { Controller, Post, Body } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginDto, LoginResponseDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async createUser(@Body() loginDto: LoginDto): Promise<LoginResponseDto> {
    return await this.authService.login(loginDto);
  }
}
