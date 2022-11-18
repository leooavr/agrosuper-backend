import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { MonthlyAreaPopulationProjection } from '../entities';

@Injectable()
export class MonthlyAreaPopulationProjectionRepository {
  private monthlyAreaPopulationProjectionRepository = dataSource.getRepository(MonthlyAreaPopulationProjection);
  public async getMonthlyAreaPopulationProjections(): Promise<MonthlyAreaPopulationProjection[]> {
    try {
      return this.monthlyAreaPopulationProjectionRepository.find();
    } catch (error) {
      throw error;
    }
  }
}
