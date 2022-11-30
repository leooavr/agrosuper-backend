import { Injectable, Logger, HttpStatus, HttpException } from '@nestjs/common';

import { Clients } from '../../entities/clients.entity';
import { ClientsRepository } from '../../repositories/clients.repository';
import { CreateClientsDto, UpdateClientsDto } from './dto';
import { AreasRepository } from '../../repositories/areas.repository';
import { CommunesRepository } from '../../repositories/communes.repository';
import { DeliveryZonesRepository } from '../../repositories/deliveryZones.repository';
import { SalesChannelRepository } from '../../repositories/salesChannel.repository';

@Injectable()
export class ClientsService {
  private logger: Logger = new Logger(ClientsService.name);

  constructor(
    private clientsRepository: ClientsRepository,
    private readonly areasRepository: AreasRepository,
    private readonly communesRepository: CommunesRepository,
    private readonly delileryZonesRepository: DeliveryZonesRepository,
    private readonly salesChannelRepository: SalesChannelRepository,
  ) {}

  async getClients(): Promise<Clients[]> {
    try {
      this.logger.debug('getting clients');
      return this.clientsRepository.getClients();
    } catch (error) {
      throw error;
    }
  }

  async createClient(createClientDto: CreateClientsDto): Promise<Clients> {
    try {
      this.logger.debug('saving Client');
      const {
        socialReason,
        lat,
        long,
        rut,
        address,
        idArea,
        idCommune,
        idDeliveryZone,
        idSaleChannel,
      } = createClientDto;

      if (!socialReason) {
        throw new HttpException(
          `Param socialReason is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!lat) {
        throw new HttpException(
          `Param lat is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!long) {
        throw new HttpException(
          `Param long is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!rut) {
        throw new HttpException(
          `Param rut is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!address) {
        throw new HttpException(
          `Param address is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!idArea) {
        throw new HttpException(
          `Param idArea is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const area = await this.areasRepository.getAreaById(idArea);
      if (!area) {
        throw new HttpException(
          `Area with id=${idArea} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!idDeliveryZone) {
        throw new HttpException(
          `Param delivery zone is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const deliveryZone =
        await this.delileryZonesRepository.getDeliveryZoneById(idDeliveryZone);
      if (!deliveryZone) {
        throw new HttpException(
          `Delivery Zone with id=${idDeliveryZone} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!idCommune) {
        throw new HttpException(
          `Param idCommune is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const commune = await this.communesRepository.getCommuneById(idCommune);
      if (!commune) {
        throw new HttpException(
          `Commune with id=${idCommune} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!idSaleChannel) {
        throw new HttpException(
          `Param idSaleChannel is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const saleChannel = await this.salesChannelRepository.getSalesChannelById(
        idSaleChannel,
      );
      if (!saleChannel) {
        throw new HttpException(
          `Sales Channel with id=${idSaleChannel} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }

      return this.clientsRepository.saveClient(
        createClientDto,
        area,
        deliveryZone,
        commune,
        saleChannel,
      );
    } catch (error) {
      throw error;
    }
  }

  async updateClient(
    id: string,
    createClientDto: CreateClientsDto,
  ): Promise<Clients> {
    try {
      this.logger.debug('saving Client');
      const {
        socialReason,
        lat,
        long,
        rut,
        address,
        idArea,
        idCommune,
        idDeliveryZone,
        idSaleChannel,
      } = createClientDto;

      if (!socialReason) {
        throw new HttpException(
          `Param socialReason is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!lat) {
        throw new HttpException(
          `Param lat is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!long) {
        throw new HttpException(
          `Param long is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!rut) {
        throw new HttpException(
          `Param rut is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!address) {
        throw new HttpException(
          `Param address is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!idArea) {
        throw new HttpException(
          `Param idArea is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const area = await this.areasRepository.getAreaById(idArea);
      if (!area) {
        throw new HttpException(
          `Area with id=${idArea} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!idDeliveryZone) {
        throw new HttpException(
          `Param delivery zone is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const deliveryZone =
        await this.delileryZonesRepository.getDeliveryZoneById(idDeliveryZone);
      if (!deliveryZone) {
        throw new HttpException(
          `Delivery Zone with id=${idDeliveryZone} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!idCommune) {
        throw new HttpException(
          `Param idCommune is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const commune = await this.communesRepository.getCommuneById(idCommune);
      if (!commune) {
        throw new HttpException(
          `Commune with id=${idCommune} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!idSaleChannel) {
        throw new HttpException(
          `Param idSaleChannel is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      const saleChannel = await this.salesChannelRepository.getSalesChannelById(
        idSaleChannel,
      );
      if (!saleChannel) {
        throw new HttpException(
          `Sales Channel with id=${idSaleChannel} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }

      return this.clientsRepository.updateClient(
        id,
        createClientDto,
        area,
        deliveryZone,
        commune,
        saleChannel,
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteClient(id: string): Promise<Clients> {
    try {
      this.logger.debug('deleting client');
      if (!id) {
        throw new HttpException(
          `Param id is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.clientsRepository.deleteClient(id);
    } catch (error) {
      throw error;
    }
  }
}
