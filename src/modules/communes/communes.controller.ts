import { Controller, Get } from "@nestjs/common";

import { CommunesService } from "./communes.service";
import { Communes } from '../../entities/communes.entity';

@Controller('communes')
export class CommunesController {
    constructor (
        private readonly communesService: CommunesService,
    ) {}
    @Get()
    async getCommunes(): Promise<Communes[]> {
        return await this.communesService.getCommunes();
    }
}
