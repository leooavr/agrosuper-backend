import { Controller, Get } from "@nestjs/common";

import { RegionsService } from "./regions.service";
import { Regions } from "../../entities/regions.entity";

@Controller('regions')
export class RegionsController {
    constructor (
        private readonly regionsService: RegionsService,
    ) {}
    @Get()
    async getRegions(): Promise<Regions[]> {
        return await this.regionsService.getRegions();
    }
}