import { Injectable, Logger } from '@nestjs/common';

import { Areas } from '../../entities/areas.entity';
import { AreasRepository } from '../../repositories/areas.repository';

@Injectable()
export class AreasService {
  private logger: Logger = new Logger(AreasService.name);

  constructor(private areasRepository: AreasRepository) {}

  async getAreas(): Promise<Areas[]> {
    try {
      this.logger.debug('getting areas');
      return this.areasRepository.getAreas();
    } catch (error) {
      throw error;
    }
  }
}
