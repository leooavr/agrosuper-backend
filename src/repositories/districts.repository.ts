import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { Districts, Communes } from '../entities';
import {
  CreateDistrictsDto,
  UpdateDistrictsDto,
} from '../modules/districts/dto';

@Injectable()
export class DistrictsRepository {
  private districtsRepository = dataSource.getRepository(Districts);
  public async getDistricts(): Promise<Districts[]> {
    try {
      return this.districtsRepository.find();
    } catch (error) {
      throw error;
    }
  }

  public async saveDistrict(
    createCommunesDto: CreateDistrictsDto,
    commune: Communes,
  ): Promise<Districts> {
    try {
      const { name } = createCommunesDto;
      const district = new Districts();

      district.name = name;
      district.commune = commune;
      return this.districtsRepository.save(district);
    } catch (error) {
      throw error;
    }
  }

  public async updateDistrict(
    id: string,
    updateDistrictsDto: UpdateDistrictsDto,
    commune: Communes,
  ): Promise<Districts> {
    try {
      const { name } = updateDistrictsDto;
      const district = await this.districtsRepository.findOneBy({ id });

      district.name = name;
      district.commune = commune;

      return this.districtsRepository.save(district);
    } catch (error) {
      throw error;
    }
  }

  public async deleteDistrict(id: string): Promise<Districts> {
    try {
      const district = await this.districtsRepository.findOneBy({ id });
      return this.districtsRepository.remove(district);
    } catch (error) {
      throw error;
    }
  }
}
