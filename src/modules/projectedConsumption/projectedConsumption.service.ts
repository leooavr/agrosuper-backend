import { Injectable, Logger } from "@nestjs/common";

import { ProjectedConsumptions } from "../../entities/projectedConsumptions.entity";
import { ProjectedConsumptionsRepository } from "../../repositories/projectedConsumptions.repository";

@Injectable()
export class ProjectedConsumptionsService {
    private logger: Logger = new Logger(ProjectedConsumptionsService.name);

    constructor(
        private projectedConsumptionsRepository: ProjectedConsumptionsRepository,
    ) {}

    async getProjectedConsumptions(): Promise<ProjectedConsumptions[]> {
        try {
            this.logger.debug('getting projected consumptions');
            return this.projectedConsumptionsRepository.getProjectedConsumptions();
        } catch (error) {
            throw error;
        }
    }

}