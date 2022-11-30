import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { ProjectedConsumptions, ProteinSectors } from '../entities';
import {
  CreateProjectedConsumptionsDto,
  UpdateProjectedConsumptionsDto,
} from '../modules/projectedConsumptions/dto';

@Injectable()
export class ProjectedConsumptionsRepository {
  private projectedConsumptionsRepository = dataSource.getRepository(
    ProjectedConsumptions,
  );
  public async getProjectedConsumptions(): Promise<ProjectedConsumptions[]> {
    try {
      return this.projectedConsumptionsRepository.find();
    } catch (error) {
      throw error;
    }
  }

  public async saveProjectedConsumption(
    createProjectedConsumptionsDto: CreateProjectedConsumptionsDto,
    proteinSector: ProteinSectors,
  ): Promise<ProjectedConsumptions> {
    try {
      const { consumption, year, month } = createProjectedConsumptionsDto;
      const projectedConsumption = new ProjectedConsumptions();

      projectedConsumption.consumption = consumption;
      projectedConsumption.year = year;
      projectedConsumption.month = month;
      projectedConsumption.proteinSector = proteinSector;
      return this.projectedConsumptionsRepository.save(projectedConsumption);
    } catch (error) {
      throw error;
    }
  }

  public async updateProjectedConsumption(
    id: string,
    createProjectedConsumptionsDto: CreateProjectedConsumptionsDto,
    proteinSector: ProteinSectors,
  ): Promise<ProjectedConsumptions> {
    try {
      const { consumption, year, month } = createProjectedConsumptionsDto;
      const projectedConsumption =
        await this.projectedConsumptionsRepository.findOneBy({ id });

      projectedConsumption.consumption = consumption;
      projectedConsumption.year = year;
      projectedConsumption.month = month;
      projectedConsumption.proteinSector = proteinSector;
      return this.projectedConsumptionsRepository.save(projectedConsumption);
    } catch (error) {
      throw error;
    }
  }

  public async deleteProjectedConsumption(
    id: string,
  ): Promise<ProjectedConsumptions> {
    try {
      const projectedConsumption =
        await this.projectedConsumptionsRepository.findOneBy({ id });
      return this.projectedConsumptionsRepository.remove(projectedConsumption);
    } catch (error) {
      throw error;
    }
  }
}
