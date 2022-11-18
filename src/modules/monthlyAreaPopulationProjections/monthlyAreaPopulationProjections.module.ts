import { Module } from '@nestjs/common';

import { MonthlyAreaPopulationProjectionsController } from "./monthlyAreaPopulationProjections.controller";
import { MonthlyAreaPopulationProjectionsService } from "./monthlyAreaPopulationProjections.service";
import { MonthlyAreaPopulationProjectionsRepository } from '../../repositories/monthlyAreaPopulationProjections.repository';

@Module({
    imports: [],
    controllers: [MonthlyAreaPopulationProjectionsController],
    providers: [MonthlyAreaPopulationProjectionsService, MonthlyAreaPopulationProjectionsRepository]
})

export class MonthlyAreaPopulationProjectionsModule {};