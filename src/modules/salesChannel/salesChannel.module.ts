import { Module } from '@nestjs/common';

import { SalesChannelController } from "./salesChannel.controller";
import { SalesChannelService } from "./salesChannel.service";

@Module({
    imports: [],
    controllers: [SalesChannelController],
    providers: [SalesChannelService]
})

export class SalesChannelModule {};