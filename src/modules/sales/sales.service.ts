import { Injectable, Logger } from '@nestjs/common';

import { Sales } from '../../entities/sales.entity';
import { SalesRepository } from '../../repositories/sales.repository';

@Injectable()
export class SalesService {
  private logger: Logger = new Logger(SalesService.name);

  constructor(private salesRepository: SalesRepository) {}

  async getSales(): Promise<Sales[]> {
    try {
      this.logger.debug('getting sales');
      return this.salesRepository.getSales();
    } catch (error) {
      throw error;
    }
  }
}
