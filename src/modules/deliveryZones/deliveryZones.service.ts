import { Injectable, Logger } from '@nestjs/common';

import { DeliveryZones } from '../../entities/deliveryZones.entity';
import { DeliveryZonesRepository } from '../../repositories/DeliveryZones.repository';

@Injectable()
export class DeliveryZonesService {
  private logger: Logger = new Logger(DeliveryZonesService.name);

  constructor(private deliveryZonesRepository: DeliveryZonesRepository) {}

  async getDeliveryZones(): Promise<DeliveryZones[]> {
    try {
      this.logger.debug('getting delivery zones');
      return this.deliveryZonesRepository.getDeliveryZones();
    } catch (error) {
      throw error;
    }
  }
}
