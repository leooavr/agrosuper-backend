import { Injectable, Logger } from '@nestjs/common';

import { MonthlyCommunalPopulationProjections } from '../../entities/monthlyCommunalPopulationProjections.entity';
import { MonthlyCommunalPopulationProjectionsRepository } from '../../repositories/monthlyCommunalPopulationProjections.repository';

@Injectable()
export class MonthlyCommunalPopulationProjectionsService {
  private logger: Logger = new Logger(
    MonthlyCommunalPopulationProjectionsService.name,
  );

  constructor(
    private monthlyCommunalPopulationProjectionsRepository: MonthlyCommunalPopulationProjectionsRepository,
  ) {}

  async getMonthlyCommunalPopulationProjection(): Promise<
    MonthlyCommunalPopulationProjections[]
  > {
    try {
      this.logger.debug('getting monthly communal population projection');
      return this.monthlyCommunalPopulationProjectionsRepository.getMonthlyCommunalPopulationProjections();
    } catch (error) {
      throw error;
    }
  }
}
