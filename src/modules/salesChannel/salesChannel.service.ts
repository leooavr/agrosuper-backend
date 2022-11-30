import { Injectable, Logger, HttpStatus, HttpException } from '@nestjs/common';

import { SalesChannel } from '../../entities/salesChannel.entity';
import { SalesChannelRepository } from '../../repositories/salesChannel.repository';
import { CreateSalesChannelDto, UpdateSalesChannelDto } from './dto';

@Injectable()
export class SalesChannelService {
  private logger: Logger = new Logger(SalesChannelService.name);

  constructor(private salesChannelRepository: SalesChannelRepository) {}

  async getSalesChannel(): Promise<SalesChannel[]> {
    try {
      this.logger.debug('getting sales channel');
      return this.salesChannelRepository.getSalesChannel();
    } catch (error) {
      throw error;
    }
  }

  async createSalesChannel(
    createSalesChannelDto: CreateSalesChannelDto,
  ): Promise<SalesChannel> {
    try {
      this.logger.debug('saving SalesChannel');
      const { name } = createSalesChannelDto;

      if (!name) {
        throw new HttpException(
          `Param name is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.salesChannelRepository.saveSalesChannel(
        createSalesChannelDto,
      );
    } catch (error) {
      throw error;
    }
  }

  async updateSalesChannel(
    id: string,
    updateSalesChannelDto: UpdateSalesChannelDto,
  ): Promise<SalesChannel> {
    try {
      this.logger.debug('updating SalesChannel');
      const { name } = updateSalesChannelDto;
      if (!name) {
        throw new HttpException(
          `Param name is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.salesChannelRepository.updateSalesChannel(
        id,
        updateSalesChannelDto,
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteSalesChannel(id: string): Promise<SalesChannel> {
    try {
      this.logger.debug('deleting SalesChannel');
      if (!id) {
        throw new HttpException(
          `Param id is undefined`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return this.salesChannelRepository.deleteSalesChannel(id);
    } catch (error) {
      throw error;
    }
  }
}
