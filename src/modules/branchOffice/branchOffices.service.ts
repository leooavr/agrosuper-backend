import { Injectable, Logger } from "@nestjs/common";

import { BranchOffices } from "../../entities/branchOffices.entity";
import { BranchOfficesRepository } from "../../repositories/branchOffice.repository";

@Injectable()
export class BranchOfficesService {
    private logger: Logger = new Logger(BranchOfficesService.name);

    constructor(
        private branchOfficesRepository: BranchOfficesRepository,
    ) {}

    async getBranchOffices(): Promise<BranchOffices[]> {
        try {
            this.logger.debug('getting branch offices');
            return this.branchOfficesRepository.getBranchOffice();
        } catch (error) {
            throw error;
        }
    }

}