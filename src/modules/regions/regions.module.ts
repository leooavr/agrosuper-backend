import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { RegionsController } from "./regions.controller";
import { RegionsService } from "./regions.service";
import { RegionsRepository } from "../../repositories/regions.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([RegionsRepository]),
    ],
    controllers: [RegionsController],
    providers: [RegionsService]
})

export class RegionsModule {};