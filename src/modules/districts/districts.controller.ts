import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { DistrictsService } from './districts.service';
import { Districts } from '../../entities/districts.entity';
import { CreateDistrictsDto, UpdateDistrictsDto } from './dto';

@Controller('districts')
export class DistrictsController {
  constructor(private readonly districtsService: DistrictsService) {}
  @Get()
  async getDistricts(): Promise<Districts[]> {
    return await this.districtsService.getDistricts();
  }

  @Post()
  async createDistrict(
    @Body() creatDistrictDto: CreateDistrictsDto,
  ): Promise<Districts> {
    return await this.districtsService.createDistrict(creatDistrictDto);
  }

  @Put('/:id')
  async updateDistrict(
    @Param('id') id: string,
    @Body() updateDistrictsDto: UpdateDistrictsDto,
  ): Promise<Districts> {
    return await this.districtsService.updateDistrict(id, updateDistrictsDto);
  }

  @Delete('/:id')
  async deleteDistrict(@Param('id') id: string): Promise<Districts> {
    return await this.districtsService.deleteDistrict(id);
  }
}
