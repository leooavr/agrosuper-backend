import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { BranchOfficesService } from './branchOffices.service';
import { BranchOffices } from '../../entities/branchOffices.entity';
import { CreateBranchOfficesDto, UpdateBranchOfficesDto } from './dto';

@Controller('branchOffices')
export class BranchOfficesController {
  constructor(private readonly branchOfficesService: BranchOfficesService) {}
  @Get()
  async getBranchOffices(): Promise<BranchOffices[]> {
    return await this.branchOfficesService.getBranchOffices();
  }

  @Post()
  async createBranchOffice(
    @Body() createBranchOfficeDto: CreateBranchOfficesDto,
  ): Promise<BranchOffices> {
    return await this.branchOfficesService.createBranchOffice(
      createBranchOfficeDto,
    );
  }

  @Put('/:id')
  async updateBranchOffice(
    @Param('id') id: number,
    @Body() updateBranchOfficesDto: UpdateBranchOfficesDto,
  ): Promise<BranchOffices> {
    return await this.branchOfficesService.updateBranchOffice(
      id,
      updateBranchOfficesDto,
    );
  }

  @Delete('/:id')
  async deleteBranchOffice(@Param('id') id: number): Promise<BranchOffices> {
    return await this.branchOfficesService.deleteBranchOffice(id);
  }
}
