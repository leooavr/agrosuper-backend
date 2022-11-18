import { Module } from '@nestjs/common';

import { SalesChannelController } from './salesChannel.controller';
import { SalesChannelService } from './salesChannel.service';
import { SalesChannelRepository } from '../../repositories/salesChannel.repository';

@Module({
  imports: [],
  controllers: [SalesChannelController],
  providers: [SalesChannelService, SalesChannelRepository],
})
export class SalesChannelModule {}
