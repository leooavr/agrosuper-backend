import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../security/guards/jwt-auth.guard';

import { BranchOfficesService } from './branchOffices.service';
import { BranchOffices } from '../../entities/branchOffices.entity';
import { CreateBranchOfficesDto, UpdateBranchOfficesDto } from './dto';

@UseGuards(JwtAuthGuard)
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
    @Param('id') id: string,
    @Body() updateBranchOfficesDto: UpdateBranchOfficesDto,
  ): Promise<BranchOffices> {
    return await this.branchOfficesService.updateBranchOffice(
      id,
      updateBranchOfficesDto,
    );
  }

  @Delete('/:id')
  async deleteBranchOffice(@Param('id') id: string): Promise<BranchOffices> {
    return await this.branchOfficesService.deleteBranchOffice(id);
  }
}
