import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { Area } from '../entities';

@Injectable()
export class AreasRepository {
  private areasRepository = dataSource.getRepository(Area);
  public async getAreas(): Promise<Area[]> {
    try {
      return this.areasRepository.find();
    } catch (error) {
      throw error;
    }
  }
}
