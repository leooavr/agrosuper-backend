import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { AreaCategory } from '../entities';

@Injectable()
export class AreasCategoryRepository {
  private areasCategoryRepository = dataSource.getRepository(AreaCategory);
  public async getAreasCategory(): Promise<AreaCategory[]> {
    try {
      return this.areasCategoryRepository.find();
    } catch (error) {
      throw error;
    }
  }
}
