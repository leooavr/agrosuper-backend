import { Controller, Get } from '@nestjs/common';

import { RealConsumptionsService } from './realConsumptions.service';
import { RealConsumptions } from '../../entities/realConsumptions.entity';

@Controller('realConsumptions')
export class RealConsumptionsController {
  constructor(
    private readonly realConsumptionsService: RealConsumptionsService,
  ) {}
  @Get()
  async getRealConsumptions(): Promise<RealConsumptions[]> {
    return await this.realConsumptionsService.getRealConsumptions();
  }
}
