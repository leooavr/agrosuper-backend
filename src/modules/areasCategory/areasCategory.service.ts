import { Injectable, Logger } from '@nestjs/common';

import { AreasCategory } from '../../entities/areasCategory.entity';
import { AreasCategoryRepository } from '../../repositories/areasCategory.repository';

@Injectable()
export class AreasCategoryService {
  private logger: Logger = new Logger(AreasCategoryService.name);

  constructor(private areasCategoryRepository: AreasCategoryRepository) {}

  async getAreasCategory(): Promise<AreasCategory[]> {
    try {
      this.logger.debug('getting areas Category');
      return this.areasCategoryRepository.getAreasCategory();
    } catch (error) {
      throw error;
    }
  }
}
