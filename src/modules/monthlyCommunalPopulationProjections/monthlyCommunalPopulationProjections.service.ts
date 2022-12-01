import { Injectable, Logger, HttpStatus, HttpException, Inject } from '@nestjs/common';

import { MonthlyCommunalPopulationProjections } from '../../entities/monthlyCommunalPopulationProjections.entity';
import { MonthlyCommunalPopulationProjectionsRepository } from '../../repositories/monthlyCommunalPopulationProjections.repository';
import {
  CreateMonthlyCommunalPopulationProjectionsDto,
  UpdateMonthlyCommunalPopulationProjectionsDto,
} from './dto';
import { CommunesRepository } from '../../repositories/communes.repository';

@Injectable()
export class MonthlyCommunalPopulationProjectionsService {
  private logger: Logger = new Logger(
    MonthlyCommunalPopulationProjectionsService.name
  );

  constructor(
    @Inject('monthlyCommunalPopulationProjectionsRepository') private monthlyCommunalPopulationProjectionsRepository: MonthlyCommunalPopulationProjectionsRepository,
    private readonly communesRepository: CommunesRepository,
  ) {}

  async getMonthlyCommunalPopulationProjection(): Promise<
    MonthlyCommunalPopulationProjections[]
  > {
    try {
      this.logger.debug('getting monthly communal population projection');
      return this.monthlyCommunalPopulationProjectionsRepository.getMonthlyCommunalPopulationProjections();
    } catch (error) {
      throw error;
    }
  }

  async createMonthlyCommunalPopulationProjection(
    createMonthlyCommunalPopulationProjectionsDto: CreateMonthlyCommunalPopulationProjectionsDto,
  ): Promise<MonthlyCommunalPopulationProjections> {
    try {
      this.logger.debug('saving monthly communal population projections');
      const { isReal, year, month, projection, idCommune } =
        createMonthlyCommunalPopulationProjectionsDto;

      if (!isReal) {
        throw new HttpException(
          `Param isReal is undefined`,
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
      if (!projection) {
        throw new HttpException(
          `Param projection is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const commune = await this.communesRepository.getCommuneById(idCommune);
      if (!commune) {
        throw new HttpException(
          `Region with id=${idCommune} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.monthlyCommunalPopulationProjectionsRepository.saveMonthlyCommunalPopulationProjection(
        createMonthlyCommunalPopulationProjectionsDto,
        commune,
      );
    } catch (error) {
      throw error;
    }
  }

  async updateMonthlyCommunalPopulationProjection(
    id: string,
    updateMonthlyCommunalPopulationProjectionsDto: UpdateMonthlyCommunalPopulationProjectionsDto,
  ): Promise<MonthlyCommunalPopulationProjections> {
    try {
      this.logger.debug('updating monthly communal population projections');
      const { isReal, year, month, projection, idCommune } =
        updateMonthlyCommunalPopulationProjectionsDto;

      if (!isReal) {
        throw new HttpException(
          `Param isReal is undefined`,
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
      if (!projection) {
        throw new HttpException(
          `Param projection is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const commune = await this.communesRepository.getCommuneById(idCommune);
      if (!commune) {
        throw new HttpException(
          `Region with id=${idCommune} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.monthlyCommunalPopulationProjectionsRepository.updateMonthlyCommunalPopulationProjection(
        id,
        updateMonthlyCommunalPopulationProjectionsDto,
        commune,
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteMonthlyCommunalPopulationProjection(
    id: string,
  ): Promise<MonthlyCommunalPopulationProjections> {
    try {
      this.logger.debug('deleting monthly communal population projections');
      if (!id) {
        throw new HttpException(
          `Param id is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.monthlyCommunalPopulationProjectionsRepository.deleteMonthlyCommunalPopulationProjection(
        id,
      );
    } catch (error) {
      throw error;
    }
  }
}
