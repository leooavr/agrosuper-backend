import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { DeliveryZones } from '../entities';

@Injectable()
export class DeliveryZonesRepository {
  private deliveryZoneRepository = dataSource.getRepository(DeliveryZones);
  public async getDeliveryZones(): Promise<DeliveryZones[]> {
    try {
      return this.deliveryZoneRepository.find();
    } catch (error) {
      throw error;
    }
  }
}
