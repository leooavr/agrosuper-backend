import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { Communes, MonthlyCommunalPopulationProjections } from '../entities';
import {
  CreateMonthlyCommunalPopulationProjectionsDto,
  UpdateMonthlyCommunalPopulationProjectionsDto,
} from '../modules/monthlyCommunalPopulationProjections/dto';

@Injectable()
export class MonthlyCommunalPopulationProjectionsRepository {
  private monthlyCommunalPopulationProjectionRepository =
    dataSource.getRepository(MonthlyCommunalPopulationProjections);
  public async getMonthlyCommunalPopulationProjections(): Promise<
    MonthlyCommunalPopulationProjections[]
  > {
    try {
      return this.monthlyCommunalPopulationProjectionRepository.find({
        relations: [
          'commune',
          'commune.province.region',
          'commune.branchOffice',
        ],
      });
    } catch (error) {
      throw error;
    }
  }

  public async getMonthlyCommunalPopulationProjectionById(
    id: string,
  ): Promise<MonthlyCommunalPopulationProjections> {
    try {
      return this.monthlyCommunalPopulationProjectionRepository.findOneBy({
        id,
      });
    } catch (error) {
      throw error;
    }
  }

  public async saveMonthlyCommunalPopulationProjection(
    createMonthlyCommunalPopulationProjectionsDto: CreateMonthlyCommunalPopulationProjectionsDto,
    commune: Communes,
  ): Promise<MonthlyCommunalPopulationProjections> {
    try {
      const { isReal, year, month, projection } =
        createMonthlyCommunalPopulationProjectionsDto;
      const MonthlyCommunalPopulationProjection =
        new MonthlyCommunalPopulationProjections();

      MonthlyCommunalPopulationProjection.isReal = isReal;
      MonthlyCommunalPopulationProjection.year = year;
      MonthlyCommunalPopulationProjection.month = month;
      MonthlyCommunalPopulationProjection.projection = projection;
      MonthlyCommunalPopulationProjection.commune = commune;
      return this.monthlyCommunalPopulationProjectionRepository.save(
        MonthlyCommunalPopulationProjection,
      );
    } catch (error) {
      throw error;
    }
  }

  public async updateMonthlyCommunalPopulationProjection(
    id: string,
    updateMonthlyCommunalPopulationProjectionsDto: UpdateMonthlyCommunalPopulationProjectionsDto,
    commune: Communes,
  ): Promise<MonthlyCommunalPopulationProjections> {
    try {
      const { isReal, year, month, projection } =
        updateMonthlyCommunalPopulationProjectionsDto;
      const monthlyCommunalPopulationProjection =
        await this.monthlyCommunalPopulationProjectionRepository.findOneBy({
          id,
        });

      monthlyCommunalPopulationProjection.isReal = isReal;
      monthlyCommunalPopulationProjection.year = year;
      monthlyCommunalPopulationProjection.month = month;
      monthlyCommunalPopulationProjection.projection = projection;
      monthlyCommunalPopulationProjection.commune = commune;
      return this.monthlyCommunalPopulationProjectionRepository.save(
        monthlyCommunalPopulationProjection,
      );
    } catch (error) {
      throw error;
    }
  }

  public async deleteMonthlyCommunalPopulationProjection(
    id: string,
  ): Promise<MonthlyCommunalPopulationProjections> {
    try {
      const monthlyCommunalPopulationProjection =
        await this.monthlyCommunalPopulationProjectionRepository.findOneBy({
          id,
        });
      return this.monthlyCommunalPopulationProjectionRepository.remove(
        monthlyCommunalPopulationProjection,
      );
    } catch (error) {
      throw error;
    }
  }
}
