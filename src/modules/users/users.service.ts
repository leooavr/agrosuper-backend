import { Injectable, Logger, HttpStatus, HttpException } from '@nestjs/common';

import { Users } from '../../entities/Users.entity';
import { UsersRepository } from '../../repositories/Users.repository';
import { CreateUsersDto, UpdateUsersDto } from './dto';

@Injectable()
export class UsersService {
  private logger: Logger = new Logger(UsersService.name);

  constructor(private usersRepository: UsersRepository) {}

  async getUsers(): Promise<Users[]> {
    try {
      this.logger.debug('getting users');
      return this.usersRepository.getUsers();
    } catch (error) {
      throw error;
    }
  }
}