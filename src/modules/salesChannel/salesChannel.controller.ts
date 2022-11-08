import { Controller, Get } from "@nestjs/common";

import { SalesChannelService } from "./salesChannel.service";
import { SalesChannel } from "../../entities/salesChannel.entity";

@Controller('salesChannel')
export class SalesChannelController {
    constructor (
        private readonly salesChannelService: SalesChannelService,
    ) {}
    @Get()
    async getSalesChannel(): Promise<SalesChannel[]> {
        return await this.salesChannelService.getSalesChannel();
    }
}