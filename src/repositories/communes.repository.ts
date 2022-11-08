import { Injectable } from '@nestjs/common';

import { dataSource } from '../infraestructure/database/database.providers';
import { Communes } from '../entities';

@Injectable()
export class CommunesRepository {
  private communesRepository = dataSource.getRepository(Communes);
  public async getCommunes(): Promise<Communes[]> {
    try {
      return this.communesRepository.find();
    } catch (error) {
      throw error;
    }
  }
}
