import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { MonthlyCommunalPopulationProjections } from '../entities';

@Injectable()
export class MonthlyCommunalPopulationProjectionsRepository {
  private monthlyCommunalPopulationProjectionRepository =
    dataSource.getRepository(MonthlyCommunalPopulationProjections);
  public async getMonthlyCommunalPopulationProjections(): Promise<
    MonthlyCommunalPopulationProjections[]
  > {
    try {
      return this.monthlyCommunalPopulationProjectionRepository.find();
    } catch (error) {
      throw error;
    }
  }
}
