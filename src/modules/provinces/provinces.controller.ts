import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../security/guards/jwt-auth.guard';

import { ProvincesService } from './provinces.service';
import { Provinces } from '../../entities/provinces.entity';
import { CreateProvincesDto, UpdateProvincesDto } from './dto';

@UseGuards(JwtAuthGuard)
@Controller('provinces')
export class ProvincesController {
  constructor(private readonly provincesService: ProvincesService) {}
  @Get()
  async getProvinces(): Promise<Provinces[]> {
    return await this.provincesService.getProvinces();
  }

  @Post()
  async createProvince(
    @Body() createProvincesDto: CreateProvincesDto,
  ): Promise<Provinces> {
    return await this.provincesService.createProvince(createProvincesDto);
  }

  @Put('/:id')
  async updateProvince(
    @Param('id') id: number,
    @Body() updateProvincesDto: UpdateProvincesDto,
  ): Promise<Provinces> {
    return await this.provincesService.updateProvince(id, updateProvincesDto);
  }

  @Delete('/:id')
  async deleteProvince(@Param('id') id: number): Promise<Provinces> {
    return await this.provincesService.deleteProvince(id);
  }
}
