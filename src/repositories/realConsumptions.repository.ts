import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { RealConsumptions, ProteinSectors } from '../entities';
import {
  CreateRealConsumptionsDto,
  UpdateRealConsumptionsDto,
} from '../modules/realConsumptions/dto';

@Injectable()
export class RealConsumptionsRepository {
  private realConsumptionsRepository =
    dataSource.getRepository(RealConsumptions);
  public async getRealConsumptions(): Promise<RealConsumptions[]> {
    try {
      return this.realConsumptionsRepository.find();
    } catch (error) {
      throw error;
    }
  }

  public async saveRealConsumption(
    createRealConsumptionsDto: CreateRealConsumptionsDto,
    proteinSector: ProteinSectors,
  ): Promise<RealConsumptions> {
    try {
      const { consumption, year, month } = createRealConsumptionsDto;
      const realConsumption = new RealConsumptions();

      realConsumption.consumption = consumption;
      realConsumption.year = year;
      realConsumption.month = month;
      realConsumption.proteinSector = proteinSector;
      return this.realConsumptionsRepository.save(realConsumption);
    } catch (error) {
      throw error;
    }
  }

  public async updateRealConsumption(
    id: string,
    createRealConsumptionsDto: CreateRealConsumptionsDto,
    proteinSector: ProteinSectors,
  ): Promise<RealConsumptions> {
    try {
      const { consumption, year, month } = createRealConsumptionsDto;
      const realConsumption = await this.realConsumptionsRepository.findOneBy({
        id,
      });

      realConsumption.consumption = consumption;
      realConsumption.year = year;
      realConsumption.month = month;
      realConsumption.proteinSector = proteinSector;
      return this.realConsumptionsRepository.save(realConsumption);
    } catch (error) {
      throw error;
    }
  }

  public async deleteRealConsumption(id: string): Promise<RealConsumptions> {
    try {
      const realConsumption = await this.realConsumptionsRepository.findOneBy({
        id,
      });
      return this.realConsumptionsRepository.remove(realConsumption);
    } catch (error) {
      throw error;
    }
  }
}
