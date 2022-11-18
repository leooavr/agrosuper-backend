import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { RealConsumptions } from '../entities';

@Injectable()
export class RealConsumptionsRepository {
  private realConsumptionsRepository =
    dataSource.getRepository(RealConsumptions);
  public async getRealConsumptions(): Promise<RealConsumptions[]> {
    try {
      return this.realConsumptionsRepository.find();
    } catch (error) {
      throw error;
    }
  }
}
