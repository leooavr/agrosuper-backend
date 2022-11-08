import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { SalesChannelController } from "./salesChannel.controller";
import { SalesChannelService } from "./salesChannel.service";
import { SalesChannelRepository } from "../../repositories/salesChannel.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([SalesChannelRepository]),
    ],
    controllers: [SalesChannelController],
    providers: [SalesChannelService]
})

export class SalesChannelModule {};