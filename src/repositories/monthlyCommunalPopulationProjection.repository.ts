import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { MonthlyCommunalPopulationProjection } from '../entities';

@Injectable()
export class MonthlyCommunalPopulationProjectionRepository {
  private monthlyCommunalPopulationProjectionRepository = dataSource.getRepository(MonthlyCommunalPopulationProjection);
  public async getMonthlyCommunalPopulationProjections(): Promise<MonthlyCommunalPopulationProjection[]> {
    try {
      return this.monthlyCommunalPopulationProjectionRepository.find();
    } catch (error) {
      throw error;
    }
  }
}
