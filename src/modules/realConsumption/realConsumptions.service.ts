import { Injectable, Logger } from "@nestjs/common";

import { RealConsumptions } from "../../entities/realConsumptions.entity";
import { RealConsumptionsRepository } from "../../repositories/realConsumptions.repository";

@Injectable()
export class RealConsumptionsService {
    private logger: Logger = new Logger(RealConsumptionsService.name);

    constructor(
        private realConsumptionsRepository: RealConsumptionsRepository,
    ) {}

    async getRealConsumptions(): Promise<RealConsumptions[]> {
        try {
            this.logger.debug('getting real consumptions');
            return this.realConsumptionsRepository.getRealConsumptions();
        } catch (error) {
            throw error;
        }
    }

}