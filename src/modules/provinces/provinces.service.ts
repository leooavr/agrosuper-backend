import { Injectable, Logger } from '@nestjs/common';

import { Provinces } from '../../entities/provinces.entity';
import { ProvincesRepository } from '../../repositories/provinces.repository';

@Injectable()
export class ProvincesService {
  private logger: Logger = new Logger(ProvincesService.name);

  constructor(private provincesRepository: ProvincesRepository) {}

  async getProvinces(): Promise<Provinces[]> {
    try {
      this.logger.debug('getting provinces');
      return this.provincesRepository.getProvinces();
    } catch (error) {
      throw error;
    }
  }
}
