import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

import { DeliveryZonesService } from './deliveryZones.service';
import { DeliveryZones } from '../../entities/deliveryZones.entity';
import {
  CreateDeliveryZonesDto,
  UpdateDeliveryZonesDto,
} from '../deliveryZones/dto';

@Controller('deliveryZones')
export class DeliveryZonesController {
  constructor(private readonly deliveryZonesService: DeliveryZonesService) {}
  @Get()
  async getDeliveryZones(): Promise<DeliveryZones[]> {
    return await this.deliveryZonesService.getDeliveryZones();
  }

  @Post()
  async createDeliveryZone(
    @Body() createDeliveryZonesDto: CreateDeliveryZonesDto,
  ): Promise<DeliveryZones> {
    return await this.deliveryZonesService.createDeliveryZone(
      createDeliveryZonesDto,
    );
  }

  @Put('/:id')
  async updateDeliveryZone(
    @Param('id') id: string,
    @Body() updateDeliveryZonesDto: UpdateDeliveryZonesDto,
  ): Promise<DeliveryZones> {
    return await this.deliveryZonesService.updateDeliveryZone(
      id,
      updateDeliveryZonesDto,
    );
  }

  @Delete('/:id')
  async deleteDeliveryZone(@Param('id') id: string): Promise<DeliveryZones> {
    return await this.deliveryZonesService.deleteDeliveryZone(id);
  }
}
