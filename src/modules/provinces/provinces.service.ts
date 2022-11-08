import { Injectable, Logger, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { connectionSource } from "../../database/dataSource";

import { Provinces } from "../../entities/provinces.entity";
import { ProvincesRepository } from "../../repositories/provinces.repository";

@Injectable()
export class ProvincesService {
    private logger: Logger = new Logger(ProvincesService.name);
    private provincesRepository = connectionSource.getRepository(Provinces);

    constructor(
        // @InjectRepository(ProvincesRepository) private provincesRepository: ProvincesRepository,
    ) {}
    
    async getProvinces(): Promise<Provinces[]> {
        try {
            this.logger.debug('getting provinces');
            return [];
        } catch (error) {
            throw error;
        }
    }
}