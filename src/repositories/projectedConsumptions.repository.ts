import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { ProjectedConsumptions } from '../entities';

@Injectable()
export class ProjectedConsumptionsRepository {
  private projectedConsumptionsRepository = dataSource.getRepository(ProjectedConsumptions);
  public async getProjectedConsumptions(): Promise<ProjectedConsumptions[]> {
    try {
      return this.projectedConsumptionsRepository.find();
    } catch (error) {
      throw error;
    }
  }
}
