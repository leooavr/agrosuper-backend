import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { ProteinSectors } from '../entities';
import {
  CreateProteinSectorsDto,
  UpdateProteinSectorsDto,
} from '../modules/proteinSectors/dto';

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

  public async getProteinSectorById(id: string): Promise<ProteinSectors> {
    try {
      return this.proteinSectorsRepository.findOneBy({ id });
    } catch (error) {
      throw error;
    }
  }

  public async saveProteinSectors(
    createProteinSectorsDto: CreateProteinSectorsDto,
  ): Promise<ProteinSectors> {
    try {
      const { name } = createProteinSectorsDto;
      const proteinSectors = new ProteinSectors();
      proteinSectors.name = name;

      return this.proteinSectorsRepository.save(proteinSectors);
    } catch (error) {
      throw error;
    }
  }

  public async updateProteinSectors(
    id: string,
    updateProteinSectorsDto: UpdateProteinSectorsDto,
  ): Promise<ProteinSectors> {
    try {
      const { name } = updateProteinSectorsDto;
      const proteinSectors = await this.proteinSectorsRepository.findOneBy({
        id,
      });

      proteinSectors.name = name;

      return this.proteinSectorsRepository.save(proteinSectors);
    } catch (error) {
      throw error;
    }
  }

  public async deleteProteinSectors(id: string): Promise<ProteinSectors> {
    try {
      const proteinSectors = await this.proteinSectorsRepository.findOneBy({
        id,
      });
      return this.proteinSectorsRepository.remove(proteinSectors);
    } catch (error) {
      throw error;
    }
  }
}
