import { Injectable, Logger, HttpStatus, HttpException } from '@nestjs/common';

import { Provinces } from '../../entities/provinces.entity';
import { ProvincesRepository } from '../../repositories/provinces.repository';
import { RegionsRepository } from '../../repositories/regions.repository';
import { CreateProvincesDto, UpdateProvincesDto } from './dto';

@Injectable()
export class ProvincesService {
  private logger: Logger = new Logger(ProvincesService.name);

  constructor(
    private provincesRepository: ProvincesRepository,
    private readonly regionsRepository: RegionsRepository,
  ) {}

  async getProvinces(): Promise<Provinces[]> {
    try {
      this.logger.debug('getting provinces');
      return this.provincesRepository.getProvinces();
    } catch (error) {
      throw error;
    }
  }
  async createProvince(
    createProvincesDto: CreateProvincesDto,
  ): Promise<Provinces> {
    try {
      this.logger.debug('saving province');
      const { id, name, idRegion } = createProvincesDto;

      if (!id) {
        throw new HttpException(
          `Param id is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!name) {
        throw new HttpException(
          `Param name is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!idRegion) {
        throw new HttpException(
          `Param idRegion is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const region = await this.regionsRepository.getRegionById(idRegion);
      if (!region) {
        throw new HttpException(
          `Region with id=${idRegion} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.provincesRepository.saveProvince(createProvincesDto, region);
    } catch (error) {
      throw error;
    }
  }

  async updateProvince(
    id: number,
    updateProvincesDto: UpdateProvincesDto,
  ): Promise<Provinces> {
    try {
      this.logger.debug('updating province');
      const { name, idRegion } = updateProvincesDto;
      if (!id) {
        throw new HttpException(
          `Param id is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!name) {
        throw new HttpException(
          `Param name is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!idRegion) {
        throw new HttpException(
          `Param idRegion is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const region = await this.regionsRepository.getRegionById(idRegion);
      if (!region) {
        throw new HttpException(
          `Region with id=${idRegion} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.provincesRepository.updateProvince(
        id,
        updateProvincesDto,
        region,
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteProvince(id: number): Promise<Provinces> {
    try {
      this.logger.debug('deleting province');
      if (!id) {
        throw new HttpException(
          `Param id is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.provincesRepository.deleteProvince(id);
    } catch (error) {
      throw error;
    }
  }
}
