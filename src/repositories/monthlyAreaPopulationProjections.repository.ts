import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { MonthlyAreaPopulationProjections } from '../entities';

@Injectable()
export class MonthlyAreaPopulationProjectionsRepository {
  private monthlyAreaPopulationProjectionRepository = dataSource.getRepository(
    MonthlyAreaPopulationProjections,
  );
  public async getMonthlyAreaPopulationProjections(): Promise<
    MonthlyAreaPopulationProjections[]
  > {
    try {
      return this.monthlyAreaPopulationProjectionRepository.find();
    } catch (error) {
      throw error;
    }
  }
}
