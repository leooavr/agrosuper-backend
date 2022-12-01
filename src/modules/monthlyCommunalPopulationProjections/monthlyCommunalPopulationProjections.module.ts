import { Module } from '@nestjs/common';

import { MonthlyCommunalPopulationProjectionsController } from './MonthlyCommunalPopulationProjections.controller';
import { MonthlyCommunalPopulationProjectionsService } from './MonthlyCommunalPopulationProjections.service';
import { MonthlyCommunalPopulationProjectionsRepository } from '../../repositories/MonthlyCommunalPopulationProjections.repository';
import { CommunesRepository } from '../../repositories/communes.repository';

@Module({
  imports: [],
  controllers: [MonthlyCommunalPopulationProjectionsController],
  providers: [
    {
      provide: 'clase',
      useClass: MonthlyCommunalPopulationProjectionsService},
    CommunesRepository,
    {
      provide: 'monthlyCommunalPopulationProjectionsRepository',
      useClass: MonthlyCommunalPopulationProjectionsRepository,
    },
  ],
})
export class MonthlyCommunalPopulationProjectionsModule {}
