import { Controller, Get } from "@nestjs/common";

import { SalesService } from "./sales.service";
import { Sales } from '../../entities/sales.entity';

@Controller('sales')
export class SalesController {
    constructor (
        private readonly salesService: SalesService,
    ) {}
    @Get()
    async getSales(): Promise<Sales[]> {
        return await this.salesService.getSales();
    }
}
