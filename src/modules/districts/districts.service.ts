import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';

import { Districts } from '../../entities/districts.entity';
import { DistrictsRepository } from '../../repositories/districts.repository';
import { CommunesRepository } from '../../repositories/communes.repository';
import { CreateDistrictsDto, UpdateDistrictsDto } from './dto';

@Injectable()
export class DistrictsService {
  private logger: Logger = new Logger(DistrictsService.name);

  constructor(
    private districtsRepository: DistrictsRepository,
    private readonly communesRepository: CommunesRepository,
  ) {}

  async getDistricts(): Promise<Districts[]> {
    try {
      this.logger.debug('getting districts');
      return this.districtsRepository.getDistricts();
    } catch (error) {
      throw error;
    }
  }

  async createDistrict(
    createDisctrictsDto: CreateDistrictsDto,
  ): Promise<Districts> {
    try {
      this.logger.debug('saving district');
      const { name, idCommune } = createDisctrictsDto;

      if (!name) {
        throw new HttpException(
          `Param name is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!idCommune) {
        throw new HttpException(
          `Param idCommune is undefined`,
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
      return this.districtsRepository.saveDistrict(
        createDisctrictsDto,
        commune,
      );
    } catch (error) {
      throw error;
    }
  }

  async updateDistrict(
    id: string,
    updateDistrictsDto: UpdateDistrictsDto,
  ): Promise<Districts> {
    try {
      this.logger.debug('updating district');
      const { name, idCommune } = updateDistrictsDto;
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
      if (!idCommune) {
        throw new HttpException(
          `Param idProvince is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const commune = await this.communesRepository.getCommuneById(idCommune);
      if (!commune) {
        throw new HttpException(
          `Province with id=${idCommune} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.districtsRepository.updateDistrict(
        id,
        updateDistrictsDto,
        commune,
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteDistrict(id: string): Promise<Districts> {
    try {
      this.logger.debug('deleting district');
      if (!id) {
        throw new HttpException(
          `Param id is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.districtsRepository.deleteDistrict(id);
    } catch (error) {
      throw error;
    }
  }
}
