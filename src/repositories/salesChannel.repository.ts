import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { SalesChannel } from '../entities';

@Injectable()
export class SalesChannelRepository {
  private salesChannelRepository = dataSource.getRepository(SalesChannel);
  public async getSalesChannel(): Promise<SalesChannel[]> {
    try {
      return this.salesChannelRepository.find();
    } catch (error) {
      throw error;
    }
  }
}
