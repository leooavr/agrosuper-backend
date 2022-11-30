import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';

import { ProjectedConsumptions } from '../../entities/projectedConsumptions.entity';
import { ProjectedConsumptionsRepository } from '../../repositories/projectedConsumptions.repository';
import {
  CreateProjectedConsumptionsDto,
  UpdateProjectedConsumptionsDto,
} from './dto';
import { ProteinSectorsRepository } from '../../repositories/proteinSectors.repository';

@Injectable()
export class ProjectedConsumptionsService {
  private logger: Logger = new Logger(ProjectedConsumptionsService.name);

  constructor(
    private projectedConsumptionsRepository: ProjectedConsumptionsRepository,
    private readonly proteinSectorsRepository: ProteinSectorsRepository,
  ) {}

  async getProjectedConsumptions(): Promise<ProjectedConsumptions[]> {
    try {
      this.logger.debug('getting projected consumptions');
      return this.projectedConsumptionsRepository.getProjectedConsumptions();
    } catch (error) {
      throw error;
    }
  }

  async createProjectedConsumption(
    createProjectedConsumptionsDto: CreateProjectedConsumptionsDto,
  ): Promise<ProjectedConsumptions> {
    try {
      this.logger.debug('saving Projected Consumption');
      const { consumption, year, month, idProteinSector } =
        createProjectedConsumptionsDto;

      if (!consumption) {
        throw new HttpException(
          `Param consumption is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!year) {
        throw new HttpException(
          `Param year is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!month) {
        throw new HttpException(
          `Param month is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!idProteinSector) {
        throw new HttpException(
          `Param idProteinSector is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const proteinSector =
        await this.proteinSectorsRepository.getProteinSectorById(
          idProteinSector,
        );
      if (!proteinSector) {
        throw new HttpException(
          `Protein Sector with id=${idProteinSector} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.projectedConsumptionsRepository.saveProjectedConsumption(
        createProjectedConsumptionsDto,
        proteinSector,
      );
    } catch (error) {
      throw error;
    }
  }

  async updateProjectedConsumption(
    id: string,
    updateProjectedConsumptionsDto: UpdateProjectedConsumptionsDto,
  ): Promise<ProjectedConsumptions> {
    try {
      this.logger.debug('updating Projected Consumption');
      const { consumption, year, month, idProteinSector } =
        updateProjectedConsumptionsDto;

      if (!consumption) {
        throw new HttpException(
          `Param consumption is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!year) {
        throw new HttpException(
          `Param year is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!month) {
        throw new HttpException(
          `Param month is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!idProteinSector) {
        throw new HttpException(
          `Param idProteinSector is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const proteinSector =
        await this.proteinSectorsRepository.getProteinSectorById(
          idProteinSector,
        );
      if (!proteinSector) {
        throw new HttpException(
          `Protein Sector with id=${idProteinSector} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.projectedConsumptionsRepository.updateProjectedConsumption(
        id,
        updateProjectedConsumptionsDto,
        proteinSector,
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteProjectedConsumption(id: string): Promise<ProjectedConsumptions> {
    try {
      this.logger.debug('deleting ProjectedConsumption');
      if (!id) {
        throw new HttpException(
          `Param id is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.projectedConsumptionsRepository.deleteProjectedConsumption(
        id,
      );
    } catch (error) {
      throw error;
    }
  }
}
