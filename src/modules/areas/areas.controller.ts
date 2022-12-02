import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../security/guards/jwt-auth.guard';

import { AreasService } from './areas.service';
import { Areas } from '../../entities/areas.entity';
import { CreateAreasDto, UpdateAreasDto } from './dto';

@UseGuards(JwtAuthGuard)
@Controller('areas')
export class AreasController {
  constructor(private readonly areasService: AreasService) {}
  @Get()
  async getAreas(): Promise<Areas[]> {
    return await this.areasService.getAreas();
  }

  @Post()
  async createArea(@Body() createAreasDto: CreateAreasDto): Promise<Areas> {
    return await this.areasService.createArea(createAreasDto);
  }

  @Put('/:id')
  async updateArea(
    @Param('id') id: string,
    @Body() updateAreasDto: UpdateAreasDto,
  ): Promise<Areas> {
    return await this.areasService.updateArea(id, updateAreasDto);
  }

  @Delete('/:id')
  async deleteArea(@Param('id') id: string): Promise<Areas> {
    return await this.areasService.deleteArea(id);
  }
}
