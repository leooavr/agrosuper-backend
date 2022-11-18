import { Module } from '@nestjs/common';

import { AreasController } from "./areas.controller";
import { AreasService } from "./areas.service";
import { AreasRepository } from '../../repositories/areas.repository';

@Module({
    imports: [],
    controllers: [AreasController],
    providers: [AreasService, AreasRepository]
})

export class AreasModule {};