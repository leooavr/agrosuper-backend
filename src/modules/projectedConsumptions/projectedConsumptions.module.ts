import { Module } from '@nestjs/common';

import { ProjectedConsumptionsController } from "./projectedConsumptions.controller";
import { ProjectedConsumptionsService } from "./projectedConsumptions.service";
import { ProjectedConsumptionsRepository } from '../../repositories/projectedConsumptions.repository';

@Module({
    imports: [],
    controllers: [ProjectedConsumptionsController],
    providers: [ProjectedConsumptionsService, ProjectedConsumptionsRepository]
})

export class ProjectedConsumptionsModule {};
