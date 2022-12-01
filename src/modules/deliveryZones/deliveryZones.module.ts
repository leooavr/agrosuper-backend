import { Module } from '@nestjs/common';

import { DeliveryZonesController } from './deliveryZones.controller';
import { DeliveryZonesService } from './deliveryZones.service';
import { DeliveryZonesRepository } from '../../repositories/deliveryZones.repository';
import { CommunesRepository } from '../../repositories/communes.repository';

@Module({
  imports: [],
  controllers: [DeliveryZonesController],
  providers: [DeliveryZonesService, CommunesRepository, {
    provide: 'deliveryZonesRepository',
    useClass: DeliveryZonesRepository
  }],
})
export class DeliveryZonesModule {}
