import { Module } from '@nestjs/common';

import { MonthlyCommunalPopulationProjectionsController } from './MonthlyCommunalPopulationProjections.controller';
import { MonthlyCommunalPopulationProjectionsService } from './MonthlyCommunalPopulationProjections.service';
import { MonthlyCommunalPopulationProjectionsRepository } from '../../repositories/MonthlyCommunalPopulationProjections.repository';

@Module({
  imports: [],
  controllers: [MonthlyCommunalPopulationProjectionsController],
  providers: [
    MonthlyCommunalPopulationProjectionsService,
    MonthlyCommunalPopulationProjectionsRepository,
  ],
})
export class MonthlyCommunalPopulationProjectionsModule {}
