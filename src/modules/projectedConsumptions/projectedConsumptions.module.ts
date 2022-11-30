import { Module } from '@nestjs/common';

import { ProjectedConsumptionsController } from './projectedConsumptions.controller';
import { ProjectedConsumptionsService } from './projectedConsumptions.service';
import { ProjectedConsumptionsRepository } from '../../repositories/projectedConsumptions.repository';
import { ProteinSectorsRepository } from '../../repositories/proteinSectors.repository';

@Module({
  imports: [],
  controllers: [ProjectedConsumptionsController],
  providers: [
    ProjectedConsumptionsService,
    ProjectedConsumptionsRepository,
    ProteinSectorsRepository,
  ],
})
export class ProjectedConsumptionsModule {}
