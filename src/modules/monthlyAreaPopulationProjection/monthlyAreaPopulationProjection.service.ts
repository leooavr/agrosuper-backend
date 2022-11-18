import { Injectable, Logger } from "@nestjs/common";

import { MonthlyAreaPopulationProjection } from "../../entities/MonthlyAreaPopulationProjection.entity";
import { MonthlyAreaPopulationProjectionRepository } from "../../repositories/MonthlyAreaPopulationProjection.repository";

@Injectable()
export class MonthlyAreaPopulationProjectionService {
    private logger: Logger = new Logger(MonthlyAreaPopulationProjectionService.name);

    constructor(
        private monthlyAreaPopulationProjectionRepository: MonthlyAreaPopulationProjectionRepository,
    ) {}

    async getMonthlyAreaPopulationProjection(): Promise<MonthlyAreaPopulationProjection[]> {
        try {
            this.logger.debug('getting monthly area population projection');
            return this.monthlyAreaPopulationProjectionRepository.getMonthlyAreaPopulationProjections();
        } catch (error) {
            throw error;
        }
    }

}