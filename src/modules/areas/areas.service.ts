import { Injectable, Logger, HttpStatus, HttpException } from '@nestjs/common';

import { Areas } from '../../entities/areas.entity';
import { AreasRepository } from '../../repositories/areas.repository';
import { DistrictsRepository } from '../../repositories/districts.repository';
import { AreasCategoryRepository } from '../../repositories/areasCategory.repository';
import { CreateAreasDto, UpdateAreasDto } from './dto';

@Injectable()
export class AreasService {
  private logger: Logger = new Logger(AreasService.name);

  constructor(
    private areasRepository: AreasRepository,
    private readonly districtRepository: DistrictsRepository,
    private readonly areasCategoryRepository: AreasCategoryRepository,
  ) {}

  async getAreas(): Promise<Areas[]> {
    try {
      this.logger.debug('getting areas');
      return this.areasRepository.getAreas();
    } catch (error) {
      throw error;
    }
  }

  async createArea(createAreasDto: CreateAreasDto): Promise<Areas> {
    try {
      this.logger.debug('saving area');
      const {
        name,
        participation,
        surface,
        isUrban,
        idDistrict,
        idAreaCategory,
      } = createAreasDto;

      if (!name) {
        throw new HttpException(
          `Param name is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!participation) {
        throw new HttpException(
          `Param participation is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!surface) {
        throw new HttpException(
          `Param surface is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!isUrban) {
        throw new HttpException(
          `Param isUrban is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!idDistrict) {
        throw new HttpException(
          `Param idDistrict is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!idAreaCategory) {
        throw new HttpException(
          `Param idAreaCategory is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const district = await this.districtRepository.getDistrictById(
        idDistrict,
      );
      if (!district) {
        throw new HttpException(
          `District with id=${idDistrict} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const areaCategory =
        await this.areasCategoryRepository.getAreaCategoryById(idAreaCategory);
      if (!areaCategory) {
        throw new HttpException(
          `Area Category with id=${idAreaCategory} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.areasRepository.saveArea(
        createAreasDto,
        district,
        areaCategory,
      );
    } catch (error) {
      throw error;
    }
  }

  async updateArea(id: string, updateAreasDto: UpdateAreasDto): Promise<Areas> {
    try {
      this.logger.debug('updating area');
      const {
        name,
        participation,
        surface,
        isUrban,
        idDistrict,
        idAreaCategory,
      } = updateAreasDto;
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
      if (!participation) {
        throw new HttpException(
          `Param participation is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!surface) {
        throw new HttpException(
          `Param surface is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!isUrban) {
        throw new HttpException(
          `Param isUrban is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!idDistrict) {
        throw new HttpException(
          `Param idDistrict is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!idAreaCategory) {
        throw new HttpException(
          `Param idAreaCategory is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const district = await this.districtRepository.getDistrictById(
        idDistrict,
      );
      if (!district) {
        throw new HttpException(
          `Province with id=${idDistrict} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const areaCategory =
        await this.areasCategoryRepository.getAreaCategoryById(idAreaCategory);
      if (!areaCategory) {
        throw new HttpException(
          `Branch Office with id=${idAreaCategory} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.areasRepository.updateArea(
        id,
        updateAreasDto,
        district,
        areaCategory,
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteArea(id: string): Promise<Areas> {
    try {
      this.logger.debug('deleting area');
      if (!id) {
        throw new HttpException(
          `Param id is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.areasRepository.deleteArea(id);
    } catch (error) {
      throw error;
    }
  }
}
