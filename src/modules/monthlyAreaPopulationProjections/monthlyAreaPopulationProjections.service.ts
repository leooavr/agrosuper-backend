import { Injectable, Logger, HttpStatus, HttpException } from '@nestjs/common';

import { MonthlyAreaPopulationProjections } from '../../entities/monthlyAreaPopulationProjections.entity';
import { MonthlyAreaPopulationProjectionsRepository } from '../../repositories/monthlyAreaPopulationProjections.repository';
import {
  CreateMonthlyAreaPopulationProjectionsDto,
  UpdateMonthlyAreaPopulationProjectionsDto,
} from './dto';
import { DistrictsRepository } from '../../repositories/districts.repository';

@Injectable()
export class MonthlyAreaPopulationProjectionsService {
  private logger: Logger = new Logger(
    MonthlyAreaPopulationProjectionsService.name,
  );

  constructor(
    private monthlyAreaPopulationProjectionsRepository: MonthlyAreaPopulationProjectionsRepository,
    private readonly districtRepository: DistrictsRepository,
  ) {}

  async getMonthlyAreaPopulationProjection(): Promise<
    MonthlyAreaPopulationProjections[]
  > {
    try {
      this.logger.debug('getting monthly area population projection');
      return this.monthlyAreaPopulationProjectionsRepository.getMonthlyAreaPopulationProjections();
    } catch (error) {
      throw error;
    }
  }
  async createMonthlyAreaPopulationProjection(
    createMonthlyAreaPopulationProjectionsDto: CreateMonthlyAreaPopulationProjectionsDto,
  ): Promise<MonthlyAreaPopulationProjections> {
    try {
      this.logger.debug('saving monthly area population projections');
      const { isReal, year, month, projection, idDistrict } =
        createMonthlyAreaPopulationProjectionsDto;

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
      if (!idDistrict) {
        throw new HttpException(
          `Param idDistrict is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const district = await this.districtRepository.getDistrictById(
        idDistrict,
      );
      if (!district) {
        throw new HttpException(
          `Region with id=${idDistrict} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.monthlyAreaPopulationProjectionsRepository.saveMonthlyAreaPopulationProjections(
        createMonthlyAreaPopulationProjectionsDto,
        district,
      );
    } catch (error) {
      throw error;
    }
  }

  async updateMonthlyAreaPopulationProjection(
    id: string,
    updateMonthlyAreaPopulationProjectionsDto: UpdateMonthlyAreaPopulationProjectionsDto,
  ): Promise<MonthlyAreaPopulationProjections> {
    try {
      this.logger.debug('updating monthly area population projection');
      const { isReal, year, month, projection, idDistrict } =
        updateMonthlyAreaPopulationProjectionsDto;

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
      if (!idDistrict) {
        throw new HttpException(
          `Param idDistrict is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const district = await this.districtRepository.getDistrictById(
        idDistrict,
      );
      if (!district) {
        throw new HttpException(
          `Region with id=${idDistrict} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.monthlyAreaPopulationProjectionsRepository.updateMonthlyAreaPopulationProjection(
        id,
        updateMonthlyAreaPopulationProjectionsDto,
        district,
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteMonthlyAreaPopulationProjection(
    id: string,
  ): Promise<MonthlyAreaPopulationProjections> {
    try {
      this.logger.debug('deleting monthly area population projection');
      if (!id) {
        throw new HttpException(
          `Param id is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.monthlyAreaPopulationProjectionsRepository.deleteMonthlyAreaPopulationProjection(
        id,
      );
    } catch (error) {
      throw error;
    }
  }
}
