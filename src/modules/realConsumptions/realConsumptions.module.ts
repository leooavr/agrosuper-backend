import { Module } from '@nestjs/common';

import { RealConsumptionsController } from './realConsumptions.controller';
import { RealConsumptionsService } from './realConsumptions.service';
import { RealConsumptionsRepository } from '../../repositories/realConsumptions.repository';
import { ProteinSectorsRepository } from '../../repositories/proteinSectors.repository';

@Module({
  imports: [],
  controllers: [RealConsumptionsController],
  providers: [
    RealConsumptionsService,
    RealConsumptionsRepository,
    ProteinSectorsRepository,
  ],
})
export class RealConsumptionsModule {}
