import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { BranchOffices } from '../entities';

@Injectable()
export class BranchOfficesRepository {
  private branchOfficeRepository = dataSource.getRepository(BranchOffices);
  public async getBranchOffice(): Promise<BranchOffices[]> {
    try {
      return this.branchOfficeRepository.find();
    } catch (error) {
      throw error;
    }
  }
}
