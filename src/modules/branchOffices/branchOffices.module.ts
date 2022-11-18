import { Module } from '@nestjs/common';

import { BranchOfficesController } from "./branchOffices.controller";
import { BranchOfficesService } from "./branchOffices.service";
import { BranchOfficesRepository } from '../../repositories/branchOffices.repository';

@Module({
    imports: [],
    controllers: [BranchOfficesController],
    providers: [BranchOfficesService, BranchOfficesRepository]
})

export class BranchOfficesModule {};