import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { Sales } from '../entities';

@Injectable()
export class SalesRepository {
  private salesRepository = dataSource.getRepository(Sales);
  public async getSales(): Promise<Sales[]> {
    try {
      return this.salesRepository.find();
    } catch (error) {
      throw error;
    }
  }
}
