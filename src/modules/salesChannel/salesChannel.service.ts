import { Injectable, Logger } from "@nestjs/common";

import { SalesChannel } from "../../entities/salesChannel.entity";
import { SalesChannelRepository } from "../../repositories/salesChannel.repository";

@Injectable()
export class SalesChannelService {
    private logger: Logger = new Logger(SalesChannelService.name);

    constructor(
        private salesChannelRepository: SalesChannelRepository,
    ) {}

    async getSalesChannel(): Promise<SalesChannel[]> {
        try {
            this.logger.debug('getting sales channel');
            return this.salesChannelRepository.getSalesChannel();
        } catch (error) {
            throw error;
        }
    }

}