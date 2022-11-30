import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { SalesChannel } from '../entities';
import {
  CreateSalesChannelDto,
  UpdateSalesChannelDto,
} from '../modules/salesChannel/dto';

@Injectable()
export class SalesChannelRepository {
  private salesChannelRepository = dataSource.getRepository(SalesChannel);
  public async getSalesChannel(): Promise<SalesChannel[]> {
    try {
      return this.salesChannelRepository.find();
    } catch (error) {
      throw error;
    }
  }

  public async getSalesChannelById(id: string): Promise<SalesChannel> {
    try {
      return this.salesChannelRepository.findOneBy({ id });
    } catch (error) {
      throw error;
    }
  }

  public async saveSalesChannel(
    createSalesChannelDto: CreateSalesChannelDto,
  ): Promise<SalesChannel> {
    try {
      const { name } = createSalesChannelDto;
      const salesChannel = new SalesChannel();
      salesChannel.name = name;

      return this.salesChannelRepository.save(SalesChannel);
    } catch (error) {
      throw error;
    }
  }

  public async updateSalesChannel(
    id: string,
    updateSalesChannelDto: UpdateSalesChannelDto,
  ): Promise<SalesChannel> {
    try {
      const { name } = updateSalesChannelDto;
      const SalesChannel = await this.salesChannelRepository.findOneBy({ id });

      SalesChannel.name = name;

      return this.salesChannelRepository.save(SalesChannel);
    } catch (error) {
      throw error;
    }
  }

  public async deleteSalesChannel(id: string): Promise<SalesChannel> {
    try {
      const salesChannel = await this.salesChannelRepository.findOneBy({ id });
      return this.salesChannelRepository.remove(salesChannel);
    } catch (error) {
      throw error;
    }
  }
}
