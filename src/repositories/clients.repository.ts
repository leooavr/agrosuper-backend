import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { Clients } from '../entities';
import { CreateClientsDto, UpdateClientsDto } from '../modules/clients/dto';
import { Areas } from '../entities/areas.entity';
import { DeliveryZones } from '../entities/deliveryZones.entity';
import { Communes } from '../entities/communes.entity';
import { SalesChannel } from '../entities/salesChannel.entity';

@Injectable()
export class ClientsRepository {
  private clientsRepository = dataSource.getRepository(Clients);
  public async getClients(): Promise<Clients[]> {
    try {
      return this.clientsRepository.find();
    } catch (error) {
      throw error;
    }
  }

  public async getClientById(id: string): Promise<Clients> {
    try {
      return this.clientsRepository.findOneBy({ id });
    } catch (error) {
      throw error;
    }
  }

  public async saveClient(
    createClientsDto: CreateClientsDto,
    area: Areas,
    deliveryZone: DeliveryZones,
    commune: Communes,
    saleChannel: SalesChannel,
  ): Promise<Clients> {
    try {
      const { socialReason, lat, long, rut, address } = createClientsDto;
      const client = new Clients();

      client.socialReason = socialReason;
      client.lat = lat;
      client.long = long;
      client.rut = rut;
      client.address = address;
      client.area = area;
      client.deliveryZone = deliveryZone;
      client.commune = commune;
      client.saleChannel = saleChannel;
      return this.clientsRepository.save(client);
    } catch (error) {
      throw error;
    }
  }

  public async updateClient(
    id: string,
    updateClientsDto: UpdateClientsDto,
    area: Areas,
    deliveryZone: DeliveryZones,
    commune: Communes,
    saleChannel: SalesChannel,
  ): Promise<Clients> {
    try {
      const { socialReason, lat, long, rut, address } = updateClientsDto;
      const client = await this.clientsRepository.findOneBy({ id });

      client.socialReason = socialReason;
      client.lat = lat;
      client.long = long;
      client.rut = rut;
      client.address = address;
      client.area = area;
      client.deliveryZone = deliveryZone;
      client.commune = commune;
      client.saleChannel = saleChannel;

      return this.clientsRepository.save(client);
    } catch (error) {
      throw error;
    }
  }

  public async deleteClient(id: string): Promise<Clients> {
    try {
      const client = await this.clientsRepository.findOneBy({ id });
      return this.clientsRepository.remove(client);
    } catch (error) {
      throw error;
    }
  }
}
