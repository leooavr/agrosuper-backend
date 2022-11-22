import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { Communes, Provinces, BranchOffices } from '../entities';
import { CreateCommunesDto, UpdateCommunesDto } from '../modules/communes/dto';

@Injectable()
export class CommunesRepository {
  private communesRepository = dataSource.getRepository(Communes);
  public async getCommunes(): Promise<Communes[]> {
    try {
      return this.communesRepository.find();
    } catch (error) {
      throw error;
    }
  }

  public async getCommuneById(id: string): Promise<Communes> {
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
      const { name } = createCommunesDto;
      const commune = new Communes();

      commune.name = name;
      commune.province = province;
      commune.branchOffice = branchOffice;
      return this.communesRepository.save(commune);
    } catch (error) {
      throw error;
    }
  }

  public async updateCommune(
    id: string,
    updateCommunesDto: UpdateCommunesDto,
    province: Provinces,
    branchOffice: BranchOffices,
  ): Promise<Communes> {
    try {
      const { name } = updateCommunesDto;
      const Commune = await this.communesRepository.findOneBy({ id });

      Commune.name = name;
      Commune.province = province;
      Commune.branchOffice = branchOffice;

      return this.communesRepository.save(Commune);
    } catch (error) {
      throw error;
    }
  }

  public async deleteCommune(id: string): Promise<Communes> {
    try {
      const commune = await this.communesRepository.findOneBy({ id });
      return this.communesRepository.remove(commune);
    } catch (error) {
      throw error;
    }
  }
}
