import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { AreasCategory } from '../entities';

@Injectable()
export class AreasCategoryRepository {
  private areasCategoryRepository = dataSource.getRepository(AreasCategory);
  public async getAreasCategory(): Promise<AreasCategory[]> {
    try {
      return this.areasCategoryRepository.find();
    } catch (error) {
      throw error;
    }
  }
}
