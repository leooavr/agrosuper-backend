import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { Districts } from '../entities';

@Injectable()
export class DistrictsRepository {
  private districtsRepository = dataSource.getRepository(Districts);
  public async getDistricts(): Promise<Districts[]> {
    try {
      return this.districtsRepository.find();
    } catch (error) {
      throw error;
    }
  }
}
