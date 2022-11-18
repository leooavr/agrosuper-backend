import { Injectable, Logger } from '@nestjs/common';

import { ProteinSectors } from '../../entities/proteinSectors.entity';
import { ProteinSectorsRepository } from '../../repositories/proteinSectors.repository';

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
}
