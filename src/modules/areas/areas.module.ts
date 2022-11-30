import { Module } from '@nestjs/common';

import { AreasController } from './areas.controller';
import { AreasService } from './areas.service';
import { AreasRepository } from '../../repositories/areas.repository';
import { DistrictsRepository } from '../../repositories/districts.repository';
import { AreasCategoryRepository } from '../../repositories/areasCategory.repository';

@Module({
  imports: [],
  controllers: [AreasController],
  providers: [
    AreasService,
    AreasRepository,
    DistrictsRepository,
    AreasCategoryRepository,
  ],
})
export class AreasModule {}
