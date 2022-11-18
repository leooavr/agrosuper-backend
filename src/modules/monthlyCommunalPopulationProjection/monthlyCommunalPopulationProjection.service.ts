import { Injectable, Logger } from "@nestjs/common";

import { MonthlyCommunalPopulationProjection } from "../../entities/MonthlyCommunalPopulationProjection.entity";
import { MonthlyCommunalPopulationProjectionRepository } from "../../repositories/MonthlyCommunalPopulationProjection.repository";

@Injectable()
export class MonthlyCommunalPopulationProjectionService {
    private logger: Logger = new Logger(MonthlyCommunalPopulationProjectionService.name);

    constructor(
        private monthlyCommunalPopulationProjectionRepository: MonthlyCommunalPopulationProjectionRepository,
    ) {}

    async getMonthlyCommunalPopulationProjection(): Promise<MonthlyCommunalPopulationProjection[]> {
        try {
            this.logger.debug('getting monthly communal population projection');
            return this.monthlyCommunalPopulationProjectionRepository.getMonthlyCommunalPopulationProjections();
        } catch (error) {
            throw error;
        }
    }

}