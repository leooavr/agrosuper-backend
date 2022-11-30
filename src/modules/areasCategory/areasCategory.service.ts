import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';

import { AreasCategory } from '../../entities/areasCategory.entity';
import { AreasCategoryRepository } from '../../repositories/areasCategory.repository';
import { CreateAreaCategoryDto, UpdateAreaCategoryDto } from './dto';

@Injectable()
export class AreasCategoryService {
  private logger: Logger = new Logger(AreasCategoryService.name);

  constructor(private areasCategoryRepository: AreasCategoryRepository) {}

  async getAreasCategory(): Promise<AreasCategory[]> {
    try {
      this.logger.debug('getting areas Category');
      return this.areasCategoryRepository.getAreasCategory();
    } catch (error) {
      throw error;
    }
  }

  async createAreaCategory(
    createAreaCategoryDto: CreateAreaCategoryDto,
  ): Promise<AreasCategory> {
    try {
      this.logger.debug('saving AreaCategory');
      const { name } = createAreaCategoryDto;

      if (!name) {
        throw new HttpException(
          `Param name is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.areasCategoryRepository.saveAreaCategory(
        createAreaCategoryDto,
      );
    } catch (error) {
      throw error;
    }
  }

  async updateAreaCategory(
    id: string,
    updateAreaCategoryDto: UpdateAreaCategoryDto,
  ): Promise<AreasCategory> {
    try {
      this.logger.debug('updating AreaCategory');
      const { name } = updateAreaCategoryDto;
      if (!name) {
        throw new HttpException(
          `Param name is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.areasCategoryRepository.updateAreaCategory(
        id,
        updateAreaCategoryDto,
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteAreaCategory(id: string): Promise<AreasCategory> {
    try {
      this.logger.debug('deleting AreaCategory');
      if (!id) {
        throw new HttpException(
          `Param id is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.areasCategoryRepository.deleteAreaCategory(id);
    } catch (error) {
      throw error;
    }
  }
}
