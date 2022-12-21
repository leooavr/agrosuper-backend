import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';

import { RegionsService } from './regions.service';
import { Regions } from '../../entities/regions.entity';
import { CreateRegionDto, UpdateRegionDto } from './dto';

@Controller('regions')
export class RegionsController {
  constructor(private readonly regionsService: RegionsService) {}

  @Get()
  async getRegions(): Promise<Regions[]> {
    return await this.regionsService.getRegions();
  }

  @Post()
  async createRegion(
    @Body() createRegionDto: CreateRegionDto,
  ): Promise<Regions> {
    return await this.regionsService.createRegion(createRegionDto);
  }

  @Put('/:id')
  async updateRegion(
    @Param('id') id: number,
    @Body() updateRegionDto: UpdateRegionDto,
  ): Promise<Regions> {
    return await this.regionsService.updateRegion(id, updateRegionDto);
  }

  @Delete('/:id')
  async deleteRegion(@Param('id') id: number): Promise<Regions> {
    return await this.regionsService.deleteRegion(id);
  }
}
