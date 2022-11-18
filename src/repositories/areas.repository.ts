import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { Areas } from '../entities';

@Injectable()
export class AreasRepository {
  private areasRepository = dataSource.getRepository(Areas);
  public async getAreas(): Promise<Areas[]> {
    try {
      return this.areasRepository.find();
    } catch (error) {
      throw error;
    }
  }
}
