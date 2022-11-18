import { Controller, Get } from '@nestjs/common';

import { ProjectedConsumptionsService } from './projectedConsumptions.service';
import { ProjectedConsumptions } from '../../entities/projectedConsumptions.entity';

@Controller('projectedConsumptions')
export class ProjectedConsumptionsController {
  constructor(
    private readonly projectedConsumptionsService: ProjectedConsumptionsService,
  ) {}
  @Get()
  async getProjectedConsumptions(): Promise<ProjectedConsumptions[]> {
    return await this.projectedConsumptionsService.getProjectedConsumptions();
  }
}
