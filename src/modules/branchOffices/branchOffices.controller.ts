import { Controller, Get } from '@nestjs/common';

import { BranchOfficesService } from './branchOffices.service';
import { BranchOffices } from '../../entities/branchOffices.entity';

@Controller('branchOffices')
export class BranchOfficesController {
  constructor(private readonly branchOfficesService: BranchOfficesService) {}
  @Get()
  async getBranchOffices(): Promise<BranchOffices[]> {
    return await this.branchOfficesService.getBranchOffices();
  }
}
