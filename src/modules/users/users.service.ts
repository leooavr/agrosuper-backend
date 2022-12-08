import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';

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

  async createUser(createUserDto: CreateUsersDto): Promise<Users> {
    try {
      this.logger.debug('saving User');
      const { name, password, email, rut } = createUserDto;

      if (!name) {
        throw new HttpException(
          `Param name is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!password) {
        throw new HttpException(
          `Param password is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!email) {
        throw new HttpException(
          `Param email is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!rut) {
        throw new HttpException(
          `Param rut is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.usersRepository.saveUser(createUserDto);
    } catch (error) {
      throw error;
    }
  }

  async updateUser(id: string, updateUserDto: UpdateUsersDto): Promise<Users> {
    try {
      this.logger.debug('updating User');
      const { name, password, email, rut } = updateUserDto;

      if (!name) {
        throw new HttpException(
          `Param name is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!password) {
        throw new HttpException(
          `Param password is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!email) {
        throw new HttpException(
          `Param email is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!rut) {
        throw new HttpException(
          `Param rut is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.usersRepository.updateUser(id, updateUserDto);
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(id: string): Promise<Users> {
    try {
      this.logger.debug('deleting User');
      if (!id) {
        throw new HttpException(
          `Param id is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.usersRepository.deleteUser(id);
    } catch (error) {
      throw error;
    }
  }
}
