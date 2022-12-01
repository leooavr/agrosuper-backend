import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { DeliveryZones } from '../entities';
import {
  CreateDeliveryZonesDto,
  UpdateDeliveryZonesDto,
} from '../modules/deliveryZones/dto';
import { Communes } from '../entities/communes.entity';

@Injectable()
export class DeliveryZonesRepository {
  private deliveryZoneRepository = dataSource.getRepository(DeliveryZones);
  public async getDeliveryZones(): Promise<DeliveryZones[]> {
    try {
      return this.deliveryZoneRepository.find({ relations: ['commune']});
    } catch (error) {
      throw error;
    }
  }

  public async getDeliveryZoneById(id: string): Promise<DeliveryZones> {
    try {
      return this.deliveryZoneRepository.findOneBy({ id });
    } catch (error) {
      throw error;
    }
  }

  public async saveDeliveryZone(
    createDeliveryZonesDto: CreateDeliveryZonesDto,
    commune: Communes,
  ): Promise<DeliveryZones> {
    try {
      const { name } = createDeliveryZonesDto;
      const deliveryZone = new DeliveryZones();

      deliveryZone.name = name;
      deliveryZone.commune = commune;
      return this.deliveryZoneRepository.save(deliveryZone);
    } catch (error) {
      throw error;
    }
  }

  public async updateDeliveryZone(
    id: string,
    updateDeliveryZonesDto: UpdateDeliveryZonesDto,
    commune: Communes,
  ): Promise<DeliveryZones> {
    try {
      const { name } = updateDeliveryZonesDto;
      const deliveryZone = await this.deliveryZoneRepository.findOneBy({ id });

      deliveryZone.name = name;
      deliveryZone.commune = commune;

      return this.deliveryZoneRepository.save(deliveryZone);
    } catch (error) {
      throw error;
    }
  }

  public async deleteDeliveryZone(id: string): Promise<DeliveryZones> {
    try {
      const deliveryZone = await this.deliveryZoneRepository.findOneBy({ id });
      return this.deliveryZoneRepository.remove(deliveryZone);
    } catch (error) {
      throw error;
    }
  }
}
