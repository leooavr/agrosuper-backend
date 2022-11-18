import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { ProvincesService } from './provinces.service';
import { Provinces } from '../../entities/provinces.entity';
import { CreateProvincesDto, UpdateProvincesDto } from './dto';

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
    @Param('id') id: string,
    @Body() updateProvincesDto: UpdateProvincesDto,
  ): Promise<Provinces> {
    return await this.provincesService.updateProvince(id, updateProvincesDto);
  }

  @Delete('/:id')
  async deleteProvince(@Param('id') id: string): Promise<Provinces> {
    return await this.provincesService.deleteProvince(id);
  }
}
