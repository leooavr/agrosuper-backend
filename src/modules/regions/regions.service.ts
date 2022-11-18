import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';

import { Regions } from '../../entities/regions.entity';
import { RegionsRepository } from '../../repositories/regions.repository';
import { CreateRegionDto, UpdateRegionDto } from './dto';

@Injectable()
export class RegionsService {
  private logger: Logger = new Logger(RegionsService.name);

  constructor(private regionsRepository: RegionsRepository) {}

  async getRegions(): Promise<Regions[]> {
    try {
      this.logger.debug('getting regions');
      return this.regionsRepository.getRegions();
    } catch (error) {
      throw error;
    }
  }

  async createRegion(createRegionDto: CreateRegionDto): Promise<Regions> {
    try {
      this.logger.debug('saving region');
      const { id, name } = createRegionDto;

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
      return this.regionsRepository.saveRegion(createRegionDto);
    } catch (error) {
      throw error;
    }
  }

  async updateRegion(
    id: number,
    updateRegionDto: UpdateRegionDto,
  ): Promise<Regions> {
    try {
      this.logger.debug('updating region');
      const { name } = updateRegionDto;
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
      return this.regionsRepository.updateRegion(id, updateRegionDto);
    } catch (error) {
      throw error;
    }
  }

  async deleteRegion(id: number): Promise<Regions> {
    try {
      this.logger.debug('deleting region');
      if (!id) {
        throw new HttpException(
          `Param id is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.regionsRepository.deleteRegion(id);
    } catch (error) {
      throw error;
    }
  }
}
