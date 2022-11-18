import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { District } from '../entities';

@Injectable()
export class DistrictsRepository {
  private districtRepository = dataSource.getRepository(District);
  public async getDistricts(): Promise<District[]> {
    try {
      return this.districtRepository.find();
    } catch (error) {
      throw error;
    }
  }
}
