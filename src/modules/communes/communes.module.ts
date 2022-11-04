import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { CommunesController } from "./communes.controller";
import { CommunesService } from "./communes.service";
import { CommunesRepository } from "../../repositories/communes.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([CommunesRepository]),
    ],
    controllers: [CommunesController],
    providers: [CommunesService]
})

export class CommunesModule {};