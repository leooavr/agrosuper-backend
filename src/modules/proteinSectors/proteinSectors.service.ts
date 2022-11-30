import { Injectable, Logger, HttpStatus, HttpException } from '@nestjs/common';

import { ProteinSectors } from '../../entities/proteinSectors.entity';
import { ProteinSectorsRepository } from '../../repositories/proteinSectors.repository';
import { CreateProteinSectorsDto, UpdateProteinSectorsDto } from './dto';

@Injectable()
export class ProteinSectorsService {
  private logger: Logger = new Logger(ProteinSectorsService.name);

  constructor(private proteinSectorsRepository: ProteinSectorsRepository) {}

  async getProteinSectors(): Promise<ProteinSectors[]> {
    try {
      this.logger.debug('getting protein sectors');
      return this.proteinSectorsRepository.getProteinSectors();
    } catch (error) {
      throw error;
    }
  }

  async createProteinSectors(
    createProteinSectorsDto: CreateProteinSectorsDto,
  ): Promise<ProteinSectors> {
    try {
      this.logger.debug('saving ProteinSectors');
      const { name } = createProteinSectorsDto;

      if (!name) {
        throw new HttpException(
          `Param name is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.proteinSectorsRepository.saveProteinSectors(
        createProteinSectorsDto,
      );
    } catch (error) {
      throw error;
    }
  }
  async updateProteinSectors(
    id: string,
    updateProteinSectorsDto: UpdateProteinSectorsDto,
  ): Promise<ProteinSectors> {
    try {
      this.logger.debug('updating ProteinSectors');
      const { name } = updateProteinSectorsDto;
      if (!name) {
        throw new HttpException(
          `Param name is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.proteinSectorsRepository.updateProteinSectors(
        id,
        updateProteinSectorsDto,
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteProteinSectors(id: string): Promise<ProteinSectors> {
    try {
      this.logger.debug('deleting ProteinSectors');
      if (!id) {
        throw new HttpException(
          `Param id is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.proteinSectorsRepository.deleteProteinSectors(id);
    } catch (error) {
      throw error;
    }
  }
}
