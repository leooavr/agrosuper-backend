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
import { JwtAuthGuard } from '../../security/guards/jwt-auth.guard';

import { ProjectedConsumptionsService } from './projectedConsumptions.service';
import { ProjectedConsumptions } from '../../entities/projectedConsumptions.entity';
import {
  CreateProjectedConsumptionsDto,
  UpdateProjectedConsumptionsDto,
} from './dto';

@UseGuards(JwtAuthGuard)
@Controller('projectedConsumptions')
export class ProjectedConsumptionsController {
  constructor(
    private readonly projectedConsumptionsService: ProjectedConsumptionsService,
  ) {}
  @Get()
  async getProjectedConsumptions(): Promise<ProjectedConsumptions[]> {
    return await this.projectedConsumptionsService.getProjectedConsumptions();
  }

  @Post()
  async createProjectedConsumption(
    @Body() createProjectedConsumptionsDto: CreateProjectedConsumptionsDto,
  ): Promise<ProjectedConsumptions> {
    return await this.projectedConsumptionsService.createProjectedConsumption(
      createProjectedConsumptionsDto,
    );
  }

  @Put('/:id')
  async updateProjectedConsumption(
    @Param('id') id: string,
    @Body() updateProjectedConsumptionsDto: UpdateProjectedConsumptionsDto,
  ): Promise<ProjectedConsumptions> {
    return await this.projectedConsumptionsService.updateProjectedConsumption(
      id,
      updateProjectedConsumptionsDto,
    );
  }

  @Delete('/:id')
  async deleteProjectedConsumption(
    @Param('id') id: string,
  ): Promise<ProjectedConsumptions> {
    return await this.projectedConsumptionsService.deleteProjectedConsumption(
      id,
    );
  }
}
