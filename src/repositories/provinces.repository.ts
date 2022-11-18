import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { Provinces } from '../entities';

@Injectable()
export class ProvincesRepository {
  private provincesRepository = dataSource.getRepository(Provinces);
  public async getProvinces(): Promise<Provinces[]> {
    try {
      return this.provincesRepository.find();
    } catch (error) {
      throw error;
    }
  }
}
