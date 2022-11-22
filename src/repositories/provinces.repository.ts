import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { Provinces, Regions } from '../entities';
import {
  CreateProvincesDto,
  UpdateProvincesDto,
} from '../modules/provinces/dto';

@Injectable()
export class ProvincesRepository {
  private provincesRepository = dataSource.getRepository(Provinces);
  public async getProvinces(): Promise<Provinces[]> {
    try {
      return this.provincesRepository.find({ relations: ['region'] });
    } catch (error) {
      throw error;
    }
  }

  public async getProvinceById(id: string): Promise<Provinces> {
    try {
      return this.provincesRepository.findOneBy({ id });
    } catch (error) {
      throw error;
    }
  }

  public async saveProvince(
    createProvincesDto: CreateProvincesDto,
    region: Regions,
  ): Promise<Provinces> {
    try {
      const { name } = createProvincesDto;
      const province = new Provinces();

      province.name = name;
      province.region = region;
      return this.provincesRepository.save(province);
    } catch (error) {
      throw error;
    }
  }

  public async updateProvince(
    id: string,
    updateProvinceDto: UpdateProvincesDto,
    region: Regions,
  ): Promise<Provinces> {
    try {
      const { name } = updateProvinceDto;
      const Province = await this.provincesRepository.findOneBy({ id });

      Province.name = name;
      Province.region = region;

      return this.provincesRepository.save(Province);
    } catch (error) {
      throw error;
    }
  }

  public async deleteProvince(id: string): Promise<Provinces> {
    try {
      const province = await this.provincesRepository.findOneBy({ id });
      return this.provincesRepository.remove(province);
    } catch (error) {
      throw error;
    }
  }
}
