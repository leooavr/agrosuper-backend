import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";

import { ProvincesController } from "./provinces.controller";
import { ProvincesService } from "./provinces.service";
import { ProvincesRepository } from "../../repositories/provinces.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([ProvincesRepository]),
    ],
    controllers: [ProvincesController],
    providers: [ProvincesService]
})

export class ProvincesModule {};