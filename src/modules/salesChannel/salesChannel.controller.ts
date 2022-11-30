import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

import { SalesChannelService } from './salesChannel.service';
import { SalesChannel } from '../../entities/salesChannel.entity';
import { CreateSalesChannelDto, UpdateSalesChannelDto } from './dto';

@Controller('salesChannel')
export class SalesChannelController {
  constructor(private readonly salesChannelService: SalesChannelService) {}
  @Get()
  async getSalesChannel(): Promise<SalesChannel[]> {
    return await this.salesChannelService.getSalesChannel();
  }

  @Post()
  async createSalesChannel(
    @Body() createSalesChannelDto: CreateSalesChannelDto,
  ): Promise<SalesChannel> {
    return await this.salesChannelService.createSalesChannel(
      createSalesChannelDto,
    );
  }

  @Put('/:id')
  async updateSalesChannel(
    @Param('id') id: string,
    @Body() updateSalesChannelDto: UpdateSalesChannelDto,
  ): Promise<SalesChannel> {
    return await this.salesChannelService.updateSalesChannel(
      id,
      updateSalesChannelDto,
    );
  }

  @Delete('/:id')
  async deleteSalesChannel(@Param('id') id: string): Promise<SalesChannel> {
    return await this.salesChannelService.deleteSalesChannel(id);
  }
}
