import {
  Injectable,
  Logger,
  HttpException,
  HttpStatus,
  Inject,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { LoginResponseDto, LoginDto } from './dto';
import { UsersRepository } from '../../repositories/Users.repository';
import { verifyPassword } from '../../utils/bcrypt';

@Injectable()
export class AuthService {
  private logger: Logger = new Logger(AuthService.name);

  constructor(
    @Inject('usersRepository') private usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    try {
      this.logger.debug('getting Auth');
      const { rut, password } = loginDto;
      if (!rut) {
        throw new HttpException(
          `Param rut is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!password) {
        throw new HttpException(
          `Param password is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const user = await this.usersRepository.getUserByRut(rut);
      if (!user) {
        throw new HttpException(
          `User with rut = ${rut} not exist`,
          HttpStatus.NOT_FOUND,
        );
      }
      const matchPassword = await verifyPassword(password, user.password);
      if (matchPassword) {
        delete user.password;
        const token = this.jwtService.sign({ user });
        const response: LoginResponseDto = {
          token,
          email: user.email,
          rut,
        };
        return response;
      } else {
        throw new HttpException(
          `Password is incorrect`,
          HttpStatus.UNAUTHORIZED,
        );
      }
    } catch (error) {
      throw error;
    }
  }
}
