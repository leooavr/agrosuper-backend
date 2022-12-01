import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { Users } from '../entities';
import {
  CreateSalesChannelDto,
  UpdateSalesChannelDto,
} from '../modules/salesChannel/dto';

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
}