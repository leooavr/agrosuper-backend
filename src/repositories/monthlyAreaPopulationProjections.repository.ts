import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { MonthlyAreaPopulationProjections, Districts } from '../entities';
import {
  CreateMonthlyAreaPopulationProjectionsDto,
  UpdateMonthlyAreaPopulationProjectionsDto,
} from '../modules/monthlyAreaPopulationProjections/dto';

@Injectable()
export class MonthlyAreaPopulationProjectionsRepository {
  private monthlyAreaPopulationProjectionRepository = dataSource.getRepository(
    MonthlyAreaPopulationProjections,
  );
  public async getMonthlyAreaPopulationProjections(): Promise<
    MonthlyAreaPopulationProjections[]
  > {
    try {
      return this.monthlyAreaPopulationProjectionRepository.find();
    } catch (error) {
      throw error;
    }
  }

  public async saveMonthlyAreaPopulationProjections(
    createMonthlyAreaPopulationProjectionsDto: CreateMonthlyAreaPopulationProjectionsDto,
    district: Districts,
  ): Promise<MonthlyAreaPopulationProjections> {
    try {
      const { isReal, year, month, projection } =
        createMonthlyAreaPopulationProjectionsDto;
      const monthlyAreaPopulationProjections =
        new MonthlyAreaPopulationProjections();

      monthlyAreaPopulationProjections.isReal = isReal;
      monthlyAreaPopulationProjections.year = year;
      monthlyAreaPopulationProjections.month = month;
      monthlyAreaPopulationProjections.projection = projection;
      monthlyAreaPopulationProjections.district = district;
      return this.monthlyAreaPopulationProjectionRepository.save(
        monthlyAreaPopulationProjections,
      );
    } catch (error) {
      throw error;
    }
  }

  public async updateMonthlyAreaPopulationProjection(
    id: string,
    updateMonthlyAreaPopulationProjectionsDto: UpdateMonthlyAreaPopulationProjectionsDto,
    district: Districts,
  ): Promise<MonthlyAreaPopulationProjections> {
    try {
      const { isReal, year, month, projection } =
        updateMonthlyAreaPopulationProjectionsDto;
      const monthlyAreaPopulationProjections =
        await this.monthlyAreaPopulationProjectionRepository.findOneBy({ id });

      monthlyAreaPopulationProjections.isReal = isReal;
      monthlyAreaPopulationProjections.year = year;
      monthlyAreaPopulationProjections.month = month;
      monthlyAreaPopulationProjections.projection = projection;
      monthlyAreaPopulationProjections.district = district;

      return this.monthlyAreaPopulationProjectionRepository.save(
        monthlyAreaPopulationProjections,
      );
    } catch (error) {
      throw error;
    }
  }

  public async deleteMonthlyAreaPopulationProjection(
    id: string,
  ): Promise<MonthlyAreaPopulationProjections> {
    try {
      const MonthlyAreaPopulationProjection =
        await this.monthlyAreaPopulationProjectionRepository.findOneBy({ id });
      return this.monthlyAreaPopulationProjectionRepository.remove(
        MonthlyAreaPopulationProjection,
      );
    } catch (error) {
      throw error;
    }
  }
}
