import { Injectable, Logger } from '@nestjs/common';

import { MonthlyAreaPopulationProjections } from '../../entities/monthlyAreaPopulationProjections.entity';
import { MonthlyAreaPopulationProjectionsRepository } from '../../repositories/monthlyAreaPopulationProjections.repository';

@Injectable()
export class MonthlyAreaPopulationProjectionsService {
  private logger: Logger = new Logger(
    MonthlyAreaPopulationProjectionsService.name,
  );

  constructor(
    private monthlyAreaPopulationProjectionsRepository: MonthlyAreaPopulationProjectionsRepository,
  ) {}

  async getMonthlyAreaPopulationProjection(): Promise<
    MonthlyAreaPopulationProjections[]
  > {
    try {
      this.logger.debug('getting monthly area population projection');
      return this.monthlyAreaPopulationProjectionsRepository.getMonthlyAreaPopulationProjections();
    } catch (error) {
      throw error;
    }
  }
}
