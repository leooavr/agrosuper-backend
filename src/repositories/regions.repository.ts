import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { Regions } from '../entities';
import { CreateRegionDto, UpdateRegionDto } from '../modules/regions/dto';

@Injectable()
export class RegionsRepository {
  private regionsRepository = dataSource.getRepository(Regions);

  public async getRegions(): Promise<Regions[]> {
    try {
      return this.regionsRepository.find();
    } catch (error) {
      throw error;
    }
  }

  public async getRegionById(id: number): Promise<Regions> {
    try {
      return this.regionsRepository.findOneBy({ id });
    } catch (error) {
      throw error;
    }
  }

  public async saveRegion(createRegionDto: CreateRegionDto): Promise<Regions> {
    try {
      const { id, name } = createRegionDto;
      const region = new Regions();

      region.id = id;
      region.name = name;

      return this.regionsRepository.save(region);
    } catch (error) {
      throw error;
    }
  }

  public async updateRegion(
    id: number,
    updateRegionDto: UpdateRegionDto,
  ): Promise<Regions> {
    try {
      const { name } = updateRegionDto;
      const region = await this.regionsRepository.findOneBy({ id });

      region.name = name;

      return this.regionsRepository.save(region);
    } catch (error) {
      throw error;
    }
  }

  public async deleteRegion(id: number): Promise<Regions> {
    try {
      const region = await this.regionsRepository.findOneBy({ id });
      return this.regionsRepository.remove(region);
    } catch (error) {
      throw error;
    }
  }
}
