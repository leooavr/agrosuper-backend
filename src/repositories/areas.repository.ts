import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { Areas, Districts, AreasCategory } from '../entities';
import { CreateAreasDto, UpdateAreasDto } from '../modules/areas/dto';

@Injectable()
export class AreasRepository {
  private areasRepository = dataSource.getRepository(Areas);
  public async getAreas(): Promise<Areas[]> {
    try {
      return this.areasRepository.find();
    } catch (error) {
      throw error;
    }
  }

  public async getAreaById(id: string): Promise<Areas> {
    try {
      return this.areasRepository.findOneBy({ id });
    } catch (error) {
      throw error;
    }
  }

  public async saveArea(
    createAreasDto: CreateAreasDto,
    district: Districts,
    areaCategory: AreasCategory,
  ): Promise<Areas> {
    try {
      const { name, participation, surface, isUrban } = createAreasDto;
      const area = new Areas();

      area.name = name;
      area.participation = participation;
      area.surface = surface;
      area.isUrban = isUrban;
      area.district = district;
      area.areaCategory = areaCategory;
      return this.areasRepository.save(area);
    } catch (error) {
      throw error;
    }
  }

  public async updateArea(
    id: string,
    updateAreasDto: UpdateAreasDto,
    district: Districts,
    areaCategory: AreasCategory,
  ): Promise<Areas> {
    try {
      const { name, participation, surface, isUrban } = updateAreasDto;
      const area = await this.areasRepository.findOneBy({ id });

      area.name = name;
      area.participation = participation;
      area.surface = surface;
      area.isUrban = isUrban;
      area.district = district;
      area.areaCategory = areaCategory;

      return this.areasRepository.save(area);
    } catch (error) {
      throw error;
    }
  }

  public async deleteArea(id: string): Promise<Areas> {
    try {
      const area = await this.areasRepository.findOneBy({ id });
      return this.areasRepository.remove(area);
    } catch (error) {
      throw error;
    }
  }
}
