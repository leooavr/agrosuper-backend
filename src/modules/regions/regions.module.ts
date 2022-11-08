import { Module } from '@nestjs/common';

import { RegionsController } from './regions.controller';
import { RegionsService } from './regions.service';

@Module({
  imports: [],
  controllers: [RegionsController],
  providers: [RegionsService],
})
export class RegionsModule {}
