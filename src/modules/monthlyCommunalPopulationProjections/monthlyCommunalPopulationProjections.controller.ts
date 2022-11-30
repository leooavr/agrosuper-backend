import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

import { MonthlyCommunalPopulationProjectionsService } from './monthlyCommunalPopulationProjections.service';
import { MonthlyCommunalPopulationProjections } from '../../entities/monthlyCommunalPopulationProjections.entity';
import {
  CreateMonthlyCommunalPopulationProjectionsDto,
  UpdateMonthlyCommunalPopulationProjectionsDto,
} from './dto';

@Controller('monthlyCommunalPopulationProjection')
export class MonthlyCommunalPopulationProjectionsController {
  constructor(
    private readonly monthlyCommunalPopulationProjectionsService: MonthlyCommunalPopulationProjectionsService,
  ) {}
  @Get()
  async getMonthlyCommunalPopulationProjection(): Promise<
    MonthlyCommunalPopulationProjections[]
  > {
    return await this.monthlyCommunalPopulationProjectionsService.getMonthlyCommunalPopulationProjection();
  }

  @Post()
  async createMonthlyCommunalPopulationProjection(
    @Body()
    createMonthlyCommunalPopulationProjectionsDto: CreateMonthlyCommunalPopulationProjectionsDto,
  ): Promise<MonthlyCommunalPopulationProjections> {
    return await this.monthlyCommunalPopulationProjectionsService.createMonthlyCommunalPopulationProjection(
      createMonthlyCommunalPopulationProjectionsDto,
    );
  }

  @Put('/:id')
  async updateMonthlyCommunalPopulationProjection(
    @Param('id') id: string,
    @Body()
    updateMonthlyCommunalPopulationProjectionsDto: UpdateMonthlyCommunalPopulationProjectionsDto,
  ): Promise<MonthlyCommunalPopulationProjections> {
    return await this.monthlyCommunalPopulationProjectionsService.updateMonthlyCommunalPopulationProjection(
      id,
      updateMonthlyCommunalPopulationProjectionsDto,
    );
  }

  @Delete('/:id')
  async deleteMonthlyCommunalPopulationProjection(
    @Param('id') id: string,
  ): Promise<MonthlyCommunalPopulationProjections> {
    return await this.monthlyCommunalPopulationProjectionsService.deleteMonthlyCommunalPopulationProjection(
      id,
    );
  }
}
