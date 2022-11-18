import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { ProteinSectors } from '../entities';

@Injectable()
export class ProteinSectorsRepository {
  private proteinSectorsRepository = dataSource.getRepository(ProteinSectors);
  public async getProteinSectors(): Promise<ProteinSectors[]> {
    try {
      return this.proteinSectorsRepository.find();
    } catch (error) {
      throw error;
    }
  }
}
