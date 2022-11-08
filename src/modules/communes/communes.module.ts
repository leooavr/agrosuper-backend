import { Module } from '@nestjs/common';

import { CommunesController } from "./communes.controller";
import { CommunesService } from "./communes.service";
import { communesProviders } from './communes.provider';

@Module({
    imports: [],
    controllers: [CommunesController],
    providers: [...communesProviders, CommunesService]
})

export class CommunesModule {};