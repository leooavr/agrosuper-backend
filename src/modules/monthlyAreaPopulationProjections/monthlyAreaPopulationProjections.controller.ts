import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

import { MonthlyAreaPopulationProjectionsService } from './monthlyAreaPopulationProjections.service';
import { MonthlyAreaPopulationProjections } from '../../entities/monthlyAreaPopulationProjections.entity';
import {
  CreateMonthlyAreaPopulationProjectionsDto,
  UpdateMonthlyAreaPopulationProjectionsDto,
} from './dto';

@Controller('monthlyAreaPopulationProjection')
export class MonthlyAreaPopulationProjectionsController {
  constructor(
    private readonly monthlyAreaPopulationProjectionsService: MonthlyAreaPopulationProjectionsService,
  ) {}
  @Get()
  async getMonthlyAreaPopulationProjection(): Promise<
    MonthlyAreaPopulationProjections[]
  > {
    return await this.monthlyAreaPopulationProjectionsService.getMonthlyAreaPopulationProjection();
  }

  @Post()
  async createMonthlyAreaPopulationProjection(
    @Body()
    createMonthlyAreaPopulationProjectionsDto: CreateMonthlyAreaPopulationProjectionsDto,
  ): Promise<MonthlyAreaPopulationProjections> {
    return await this.monthlyAreaPopulationProjectionsService.createMonthlyAreaPopulationProjection(
      createMonthlyAreaPopulationProjectionsDto,
    );
  }

  @Put('/:id')
  async updateMonthlyAreaPopulationProjection(
    @Param('id') id: string,
    @Body()
    updateMonthlyAreaPopulationProjectionsDto: UpdateMonthlyAreaPopulationProjectionsDto,
  ): Promise<MonthlyAreaPopulationProjections> {
    return await this.monthlyAreaPopulationProjectionsService.updateMonthlyAreaPopulationProjection(
      id,
      updateMonthlyAreaPopulationProjectionsDto,
    );
  }

  @Delete('/:id')
  async deleteMonthlyAreaPopulationProjection(
    @Param('id') id: string,
  ): Promise<MonthlyAreaPopulationProjections> {
    return await this.monthlyAreaPopulationProjectionsService.deleteMonthlyAreaPopulationProjection(
      id,
    );
  }
}
