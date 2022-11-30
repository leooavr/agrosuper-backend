import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

import { RealConsumptionsService } from './realConsumptions.service';
import { RealConsumptions } from '../../entities/realConsumptions.entity';
import { CreateRealConsumptionsDto, UpdateRealConsumptionsDto } from './dto';

@Controller('realConsumptions')
export class RealConsumptionsController {
  constructor(
    private readonly realConsumptionsService: RealConsumptionsService,
  ) {}
  @Get()
  async getRealConsumptions(): Promise<RealConsumptions[]> {
    return await this.realConsumptionsService.getRealConsumptions();
  }

  @Post()
  async createRealConsumption(
    @Body() createRealConsumptionsDto: CreateRealConsumptionsDto,
  ): Promise<RealConsumptions> {
    return await this.realConsumptionsService.createRealConsumption(
      createRealConsumptionsDto,
    );
  }

  @Put('/:id')
  async updateRealConsumption(
    @Param('id') id: string,
    @Body() updateRealConsumptionsDto: UpdateRealConsumptionsDto,
  ): Promise<RealConsumptions> {
    return await this.realConsumptionsService.updateRealConsumption(
      id,
      updateRealConsumptionsDto,
    );
  }

  @Delete('/:id')
  async deleteRealConsumption(
    @Param('id') id: string,
  ): Promise<RealConsumptions> {
    return await this.realConsumptionsService.deleteRealConsumption(id);
  }
}
