import { Injectable, Logger } from '@nestjs/common';

import { Regions } from '../../entities/regions.entity';

@Injectable()
export class RegionsService {
  private logger: Logger = new Logger(RegionsService.name);

  constructor() {}

  async getRegions(): Promise<Regions[]> {
    try {
      this.logger.debug('getting regions');
      return [];
    } catch (error) {
      throw error;
    }
  }
}
