import { Injectable, Logger, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { connectionSource } from "../../database/dataSource";

import { RegionsRepository } from '../../repositories/regions.repository';
import { Regions } from "../../entities/regions.entity";

@Injectable()
export class RegionsService {
    private logger: Logger = new Logger(RegionsService.name);
    private regionsRepository = connectionSource.getRepository(Regions);

    constructor(
        // @InjectRepository(RegionsRepository) private regionssRepository: RegionsRepository,
    ) {}

    async getRegions(): Promise<Regions[]> {
        try {
            this.logger.debug('getting regions');
            return [];
        } catch (error) {
            throw error;
        }
    }

}