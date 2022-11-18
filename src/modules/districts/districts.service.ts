import { Injectable, Logger } from "@nestjs/common";

import { Districts } from "../../entities/districts.entity";
import { DistrictsRepository } from "../../repositories/districts.repository";

@Injectable()
export class DistrictsService {
    private logger: Logger = new Logger(DistrictsService.name);

    constructor(
        private districtsRepository: DistrictsRepository,
    ) {}

    async getDistricts(): Promise<Districts[]> {
        try {
            this.logger.debug('getting districts');
            return this.districtsRepository.getDistricts();
        } catch (error) {
            throw error;
        }
    }

}