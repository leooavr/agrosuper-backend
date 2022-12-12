import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { Users } from '../entities';
import { CreateUsersDto, UpdateUsersDto } from '../modules/users/dto';
import { encryptPassword } from '../utils/bcrypt';

@Injectable()
export class UsersRepository {
  private usersRepository = dataSource.getRepository(Users);
  public async getUsers(): Promise<Users[]> {
    try {
      return this.usersRepository.find();
    } catch (error) {
      throw error;
    }
  }

  public async getUserByRut(rut: string): Promise<Users> {
    try {
      return await this.usersRepository.findOneBy({ rut });
    } catch (error) {
      throw error;
    }
  }

  public async saveUser(createUserDto: CreateUsersDto): Promise<Users> {
    try {
      const { name, password, email, rut } = createUserDto;
      const user = new Users();

      const encryptedPassword = await encryptPassword(password);

      user.name = name;
      user.password = encryptedPassword as string;
      user.email = email;
      user.rut = rut;
      return this.usersRepository.save(user);
    } catch (error) {
      throw error;
    }
  }

  public async updateUser(
    id: string,
    updateUserDto: UpdateUsersDto,
  ): Promise<Users> {
    try {
      const { name, password, email, rut } = updateUserDto;
      const user = await this.usersRepository.findOneBy({ id });

      user.name = name;
      user.password = password;
      user.email = email;
      user.rut = rut;
      return this.usersRepository.save(user);
    } catch (error) {
      throw error;
    }
  }

  public async deleteUser(id: string): Promise<Users> {
    try {
      const user = await this.usersRepository.findOneBy({ id });
      return this.usersRepository.remove(user);
    } catch (error) {
      throw error;
    }
  }
}
