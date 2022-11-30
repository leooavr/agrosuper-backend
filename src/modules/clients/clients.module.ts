import { Module } from '@nestjs/common';

import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { ClientsRepository } from '../../repositories/clients.repository';
import { AreasRepository } from '../../repositories/areas.repository';
import { CommunesRepository } from '../../repositories/communes.repository';
import { DeliveryZonesRepository } from '../../repositories/deliveryZones.repository';
import { SalesChannelRepository } from '../../repositories/salesChannel.repository';

@Module({
  imports: [],
  controllers: [ClientsController],
  providers: [
    ClientsService,
    ClientsRepository,
    AreasRepository,
    CommunesRepository,
    DeliveryZonesRepository,
    SalesChannelRepository,
  ],
})
export class ClientsModule {}
