import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { AreasCategory } from '../entities';
import {
  CreateAreaCategoryDto,
  UpdateAreaCategoryDto,
} from '../modules/areasCategory/dto';

@Injectable()
export class AreasCategoryRepository {
  private areasCategoryRepository = dataSource.getRepository(AreasCategory);
  public async getAreasCategory(): Promise<AreasCategory[]> {
    try {
      return this.areasCategoryRepository.find();
    } catch (error) {
      throw error;
    }
  }
  public async getAreaCategoryById(id: string): Promise<AreasCategory> {
    try {
      return this.areasCategoryRepository.findOneBy({ id });
    } catch (error) {
      throw error;
    }
  }

  public async saveAreaCategory(
    createAreasCategoryDto: CreateAreaCategoryDto,
  ): Promise<AreasCategory> {
    try {
      const { name } = createAreasCategoryDto;
      const areasCategory = new AreasCategory();
      areasCategory.name = name;

      return this.areasCategoryRepository.save(areasCategory);
    } catch (error) {
      throw error;
    }
  }

  public async updateAreaCategory(
    id: string,
    updateAreasCategoryDto: UpdateAreaCategoryDto,
  ): Promise<AreasCategory> {
    try {
      const { name } = updateAreasCategoryDto;
      const areasCategory = await this.areasCategoryRepository.findOneBy({
        id,
      });

      areasCategory.name = name;

      return this.areasCategoryRepository.save(areasCategory);
    } catch (error) {
      throw error;
    }
  }

  public async deleteAreaCategory(id: string): Promise<AreasCategory> {
    try {
      const areasCategory = await this.areasCategoryRepository.findOneBy({
        id,
      });
      return this.areasCategoryRepository.remove(areasCategory);
    } catch (error) {
      throw error;
    }
  }
}
