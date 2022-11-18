import { Controller, Get } from '@nestjs/common';

import { DeliveryZonesService } from './deliveryZones.service';
import { DeliveryZones } from '../../entities/deliveryZones.entity';

@Controller('deliveryZones')
export class DeliveryZonesController {
  constructor(private readonly deliveryZonesService: DeliveryZonesService) {}
  @Get()
  async getDeliveryZones(): Promise<DeliveryZones[]> {
    return await this.deliveryZonesService.getDeliveryZones();
  }
}
