import { Injectable, Logger } from '@nestjs/common';

import { SalesChannel } from '../../entities/salesChannel.entity';

@Injectable()
export class SalesChannelService {
  private logger: Logger = new Logger(SalesChannel.name);

  constructor() {}

  async getSalesChannel(): Promise<SalesChannel[]> {
    try {
      this.logger.debug('getting salesChannel');
      return [];
    } catch (error) {
      throw error;
    }
  }
}
