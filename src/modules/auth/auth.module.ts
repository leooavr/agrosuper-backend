import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersRepository } from '../../repositories/users.repository';

dotenv.config();

const { JWT_SECRET } = process.env;

@Module({
  imports: [
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: '4h' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: 'usersRepository',
      useClass: UsersRepository,
    },
  ],
})
export class AuthModule {}
