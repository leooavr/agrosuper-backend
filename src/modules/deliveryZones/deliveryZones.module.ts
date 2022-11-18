import { Module } from '@nestjs/common';

import { DeliveryZonesController } from './deliveryZones.controller';
import { DeliveryZonesService } from './deliveryZones.service';
import { DeliveryZonesRepository } from '../../repositories/deliveryZones.repository';

@Module({
  imports: [],
  controllers: [DeliveryZonesController],
  providers: [DeliveryZonesService, DeliveryZonesRepository],
})
export class DeliveryZonesModule {}
