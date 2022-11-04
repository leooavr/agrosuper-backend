import { Injectable, Logger, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { connectionSource } from "../../database/dataSource";

import { CommunesRepository } from '../../repositories/communes.repository';
import { Communes } from "../../entities/communes.entity";

@Injectable()
export class CommunesService {
    private logger: Logger = new Logger(CommunesService.name);
    private communesRepository = connectionSource.getRepository(Communes);

    constructor(
        // @InjectRepository(CommunesRepository) private communesRepository: CommunesRepository,
    ) {}

    async getCommunes(): Promise<Communes[]> {
        try {
            this.logger.debug('getting communes');
            return [];
        } catch (error) {
            throw error;
        }
    }

}