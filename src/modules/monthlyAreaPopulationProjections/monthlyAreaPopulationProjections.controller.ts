import { Controller, Get } from '@nestjs/common';

import { MonthlyAreaPopulationProjectionsService } from './monthlyAreaPopulationProjections.service';
import { MonthlyAreaPopulationProjections } from '../../entities/monthlyAreaPopulationProjections.entity';

@Controller('monthlyAreaPopulationProjection')
export class MonthlyAreaPopulationProjectionsController {
  constructor(
    private readonly monthlyAreaPopulationProjectionService: MonthlyAreaPopulationProjectionsService,
  ) {}
  @Get()
  async getMonthlyAreaPopulationProjection(): Promise<
    MonthlyAreaPopulationProjections[]
  > {
    return await this.monthlyAreaPopulationProjectionService.getMonthlyAreaPopulationProjection();
  }
}
