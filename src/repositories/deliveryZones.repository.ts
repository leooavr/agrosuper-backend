import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { DeliveryZone } from '../entities';

@Injectable()
export class DeliveryZonesRepository {
  private deliveryZoneRepository = dataSource.getRepository(DeliveryZone);
  public async getDeliveryZones(): Promise<DeliveryZone[]> {
    try {
      return this.deliveryZoneRepository.find();
    } catch (error) {
      throw error;
    }
  }
}
