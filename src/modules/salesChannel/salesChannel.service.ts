import { Injectable, Logger, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { connectionSource } from "../../database/dataSource";

import { SalesChannelRepository } from "../../repositories/salesChannel.repository";
import { SalesChannel } from "../../entities/salesChannel.entity";

@Injectable()
export class SalesChannelService {
    private logger: Logger = new Logger(SalesChannel.name);
    private salesChannelRepository = connectionSource.getRepository(SalesChannel);

    constructor(
        // @InjectRepository(SalesChannelRepository) private salesChannelRepository: SalesChannelRepository,
    ) {}

    async getSalesChannel(): Promise<SalesChannel[]> {
        try {
            this.logger.debug('getting salesChannel');
            return [];
        } catch (error) {
            throw error;
        }
    }

}