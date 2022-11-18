import { Controller, Get } from '@nestjs/common';

import { MonthlyCommunalPopulationProjectionsService } from './monthlyCommunalPopulationProjections.service';
import { MonthlyCommunalPopulationProjections } from '../../entities/monthlyCommunalPopulationProjections.entity';

@Controller('monthlyCommunalPopulationProjection')
export class MonthlyCommunalPopulationProjectionsController {
  constructor(
    private readonly monthlyCommunalPopulationProjectionService: MonthlyCommunalPopulationProjectionsService,
  ) {}
  @Get()
  async getMonthlyCommunalPopulationProjection(): Promise<
    MonthlyCommunalPopulationProjections[]
  > {
    return await this.monthlyCommunalPopulationProjectionService.getMonthlyCommunalPopulationProjection();
  }
}
