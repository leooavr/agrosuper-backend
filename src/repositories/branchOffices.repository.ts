import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { BranchOffices } from '../entities';
import {
  CreateBranchOfficesDto,
  UpdateBranchOfficesDto,
} from '../modules/branchOffices/dto';

@Injectable()
export class BranchOfficesRepository {
  private branchOfficeRepository = dataSource.getRepository(BranchOffices);
  public async getBranchOffices(): Promise<BranchOffices[]> {
    try {
      return this.branchOfficeRepository.find();
    } catch (error) {
      throw error;
    }
  }

  public async getBranchOfficeById(id: string): Promise<BranchOffices> {
    try {
      return this.branchOfficeRepository.findOneBy({ id });
    } catch (error) {
      throw error;
    }
  }

  public async saveBranchOffice(
    createBranchOfficesDto: CreateBranchOfficesDto,
  ): Promise<BranchOffices> {
    try {
      const { name } = createBranchOfficesDto;
      const branchOffice = new BranchOffices();

      branchOffice.name = name;
      return this.branchOfficeRepository.save(branchOffice);
    } catch (error) {
      throw error;
    }
  }

  public async updateBranchOffice(
    id: string,
    updateBranchOfficesDto: UpdateBranchOfficesDto,
  ): Promise<BranchOffices> {
    try {
      const { name } = updateBranchOfficesDto;
      const branchOffices = await this.branchOfficeRepository.findOneBy({ id });

      branchOffices.name = name;
      return this.branchOfficeRepository.save(branchOffices);
    } catch (error) {
      throw error;
    }
  }

  public async deleteBranchOffice(id: string): Promise<BranchOffices> {
    try {
      const branchOffice = await this.branchOfficeRepository.findOneBy({ id });
      return this.branchOfficeRepository.remove(branchOffice);
    } catch (error) {
      throw error;
    }
  }
}
