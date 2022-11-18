import { Injectable, Logger } from '@nestjs/common';

import { Regions } from '../../entities/regions.entity';
import { RegionsRepository } from '../../repositories/regions.repository';

@Injectable()
export class RegionsService {
  private logger: Logger = new Logger(RegionsService.name);

  constructor(private regionsRepository: RegionsRepository) {}

  async getRegions(): Promise<Regions[]> {
    try {
      this.logger.debug('getting regions');
      return this.regionsRepository.getRegions();
    } catch (error) {
      throw error;
    }
  }
}
