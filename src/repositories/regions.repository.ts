import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { Regions } from '../entities';

@Injectable()
export class RegionsRepository {
  private regionsRepository = dataSource.getRepository(Regions);
  public async getRegions(): Promise<Regions[]> {
    try {
      return this.regionsRepository.find();
    } catch (error) {
      throw error;
    }
  }
}
