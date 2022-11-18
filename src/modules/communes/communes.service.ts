import { Injectable, Logger } from '@nestjs/common';

import { Communes } from '../../entities/communes.entity';
import { CommunesRepository } from '../../repositories/communes.repository';

@Injectable()
export class CommunesService {
  private logger: Logger = new Logger(CommunesService.name);

  constructor(private communesRepository: CommunesRepository) {}

  async getCommunes(): Promise<Communes[]> {
    try {
      this.logger.debug('getting communes');
      return this.communesRepository.getCommunes();
    } catch (error) {
      throw error;
    }
  }
}
