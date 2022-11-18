import { Module } from '@nestjs/common';

import { RealConsumptionsController } from "./realConsumptions.controller";
import { RealConsumptionsService } from "./realConsumptions.service";
import { RealConsumptionsRepository } from '../../repositories/realConsumptions.repository';

@Module({
    imports: [],
    controllers: [RealConsumptionsController],
    providers: [RealConsumptionsService, RealConsumptionsRepository]
})

export class RealConsumptionsModule {};
