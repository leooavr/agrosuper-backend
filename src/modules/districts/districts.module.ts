import { Module } from '@nestjs/common';

import { DistrictsController } from './districts.controller';
import { DistrictsService } from './districts.service';
import { DistrictsRepository } from '../../repositories/districts.repository';
import { CommunesRepository } from '../../repositories/communes.repository';

@Module({
  imports: [],
  controllers: [DistrictsController],
  providers: [DistrictsService, DistrictsRepository, CommunesRepository],
})
export class DistrictsModule {}
