import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';

import { RealConsumptions } from '../../entities/realConsumptions.entity';
import { RealConsumptionsRepository } from '../../repositories/realConsumptions.repository';
import { ProteinSectorsRepository } from '../../repositories/proteinSectors.repository';
import { CreateRealConsumptionsDto, UpdateRealConsumptionsDto } from './dto';

@Injectable()
export class RealConsumptionsService {
  private logger: Logger = new Logger(RealConsumptionsService.name);

  constructor(
    private realConsumptionsRepository: RealConsumptionsRepository,
    private readonly proteinSectorsRepository: ProteinSectorsRepository,
  ) {}

  async getRealConsumptions(): Promise<RealConsumptions[]> {
    try {
      this.logger.debug('getting real consumptions');
      return this.realConsumptionsRepository.getRealConsumptions();
    } catch (error) {
      throw error;
    }
  }

  async createRealConsumption(
    createRealConsumptionsDto: CreateRealConsumptionsDto,
  ): Promise<RealConsumptions> {
    try {
      this.logger.debug('saving Real Consumption');
      const { consumption, year, month, idProteinSector } =
        createRealConsumptionsDto;

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
      return this.realConsumptionsRepository.saveRealConsumption(
        createRealConsumptionsDto,
        proteinSector,
      );
    } catch (error) {
      throw error;
    }
  }

  async updateRealConsumption(
    id: string,
    updateRealConsumptionsDto: UpdateRealConsumptionsDto,
  ): Promise<RealConsumptions> {
    try {
      this.logger.debug('updating Real Consumption');
      const { consumption, year, month, idProteinSector } =
        updateRealConsumptionsDto;

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
      return this.realConsumptionsRepository.updateRealConsumption(
        id,
        updateRealConsumptionsDto,
        proteinSector,
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteRealConsumption(id: string): Promise<RealConsumptions> {
    try {
      this.logger.debug('deleting RealConsumption');
      if (!id) {
        throw new HttpException(
          `Param id is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.realConsumptionsRepository.deleteRealConsumption(id);
    } catch (error) {
      throw error;
    }
  }
}
