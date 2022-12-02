import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { Communes, Provinces, BranchOffices } from '../entities';
import { CreateCommunesDto, UpdateCommunesDto } from '../modules/communes/dto';

@Injectable()
export class CommunesRepository {
  private communesRepository = dataSource.getRepository(Communes);
  public async getCommunes(): Promise<Communes[]> {
    try {
      return this.communesRepository.find({
        relations: ['province', 'province.region', 'branchOffice'],
      });
    } catch (error) {
      throw error;
    }
  }

  public async getCommuneById(id: number): Promise<Communes> {
    try {
      return this.communesRepository.findOneBy({ id });
    } catch (error) {
      throw error;
    }
  }

  public async saveCommune(
    createCommunesDto: CreateCommunesDto,
    province: Provinces,
    branchOffice: BranchOffices,
  ): Promise<Communes> {
    try {
      const { id, name } = createCommunesDto;
      const commune = new Communes();

      commune.id = id;
      commune.name = name;
      commune.province = province;
      commune.branchOffice = branchOffice;
      return this.communesRepository.save(commune);
    } catch (error) {
      throw error;
    }
  }

  public async updateCommune(
    id: number,
    updateCommunesDto: UpdateCommunesDto,
    province: Provinces,
    branchOffice: BranchOffices,
  ): Promise<Communes> {
    try {
      const { name } = updateCommunesDto;
      const commune = await this.communesRepository.findOneBy({ id });

      commune.name = name;
      commune.province = province;
      commune.branchOffice = branchOffice;

      return this.communesRepository.save(commune);
    } catch (error) {
      throw error;
    }
  }

  public async deleteCommune(id: number): Promise<Communes> {
    try {
      const commune = await this.communesRepository.findOneBy({ id });
      return this.communesRepository.remove(commune);
    } catch (error) {
      throw error;
    }
  }
}
