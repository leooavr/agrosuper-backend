import { Module } from '@nestjs/common';

import { RegionsController } from './regions.controller';
import { RegionsService } from './regions.service';
import { RegionsRepository } from "../../repositories/regions.repository";

@Module({
  imports: [],
  controllers: [RegionsController],
  providers: [RegionsService, RegionsRepository],
})
export class RegionsModule { }
