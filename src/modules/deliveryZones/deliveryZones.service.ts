import { Injectable, Logger, HttpStatus, HttpException, Inject } from '@nestjs/common';

import { CommunesRepository } from '../../repositories/communes.repository';
import { DeliveryZones } from '../../entities/deliveryZones.entity';
import { DeliveryZonesRepository } from '../../repositories/DeliveryZones.repository';
import {
  CreateDeliveryZonesDto,
  UpdateDeliveryZonesDto,
} from '../deliveryZones/dto';

@Injectable()
export class DeliveryZonesService {
  private logger: Logger = new Logger(DeliveryZonesService.name);

  constructor(
    @Inject('deliveryZonesRepository') private deliveryZonesRepository: DeliveryZonesRepository,
    private readonly communesRepository: CommunesRepository,
  ) {}

  async getDeliveryZones(): Promise<DeliveryZones[]> {
    try {
      this.logger.debug('getting delivery zones');
      return this.deliveryZonesRepository.getDeliveryZones();
    } catch (error) {
      throw error;
    }
  }

  async createDeliveryZone(
    createDeliveryZonesDto: CreateDeliveryZonesDto,
  ): Promise<DeliveryZones> {
    try {
      this.logger.debug('saving delivery zone');
      const { name, idCommune } = createDeliveryZonesDto;

      if (!name) {
        throw new HttpException(
          `Param name is undefined`,
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
          `Region with id=${idCommune} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.deliveryZonesRepository.saveDeliveryZone(
        createDeliveryZonesDto,
        commune,
      );
    } catch (error) {
      throw error;
    }
  }

  async updateDeliveryZone(
    id: string,
    updateDeliveryZonesDto: UpdateDeliveryZonesDto,
  ): Promise<DeliveryZones> {
    try {
      this.logger.debug('updating delivery zone');
      const { name, idCommune } = updateDeliveryZonesDto;
      if (!id) {
        throw new HttpException(
          `Param id is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      if (!name) {
        throw new HttpException(
          `Param name is undefined`,
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
          `Province with id=${idCommune} not found`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.deliveryZonesRepository.updateDeliveryZone(
        id,
        updateDeliveryZonesDto,
        commune,
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteDeliveryZone(id: string): Promise<DeliveryZones> {
    try {
      this.logger.debug('deleting delivery zone');
      if (!id) {
        throw new HttpException(
          `Param id is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.deliveryZonesRepository.deleteDeliveryZone(id);
    } catch (error) {
      throw error;
    }
  }
}
