import { Inject, Injectable, Logger } from "@nestjs/common";
import { Repository } from "typeorm";

import { Communes } from "../../entities/communes.entity";

@Injectable()
export class CommunesService {
    private logger: Logger = new Logger(CommunesService.name);

    constructor(
        @Inject('COMMUNES_REPOSITORY')
        private communesRepository: Repository<Communes>,
    ) {}

    async getCommunes(): Promise<Communes[]> {
        try {
            this.logger.debug('getting communes');
            return this.communesRepository.find();
        } catch (error) {
            throw error;
        }
    }

}