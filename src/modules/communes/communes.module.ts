import { Module } from '@nestjs/common';

import { CommunesController } from "./communes.controller";
import { CommunesService } from "./communes.service";
import { CommunesRepository } from '../../repositories/communes.repository';

@Module({
    imports: [],
    controllers: [CommunesController],
    providers: [CommunesService, CommunesRepository]
})

export class CommunesModule {};
