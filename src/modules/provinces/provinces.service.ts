import { Injectable, Logger } from '@nestjs/common';

import { Provinces } from '../../entities/provinces.entity';

@Injectable()
export class ProvincesService {
  private logger: Logger = new Logger(ProvincesService.name);
  constructor() {}

  async getProvinces(): Promise<Provinces[]> {
    try {
      this.logger.debug('getting provinces');
      return [];
    } catch (error) {
      throw error;
    }
  }
}
