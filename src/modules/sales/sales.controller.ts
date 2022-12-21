import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';

import { SalesService } from './sales.service';
import { Sales } from '../../entities/sales.entity';
import { CreateSalesDto, UpdateSalesDto } from './dto';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}
  @Get()
  async getSales(): Promise<Sales[]> {
    return await this.salesService.getSales();
  }

  @Post()
  async createSale(@Body() createSalesDto: CreateSalesDto): Promise<Sales> {
    return await this.salesService.createSale(createSalesDto);
  }

  @Put('/:id')
  async updateSale(
    @Param('id') id: string,
    @Body() updateSalesDto: UpdateSalesDto,
  ): Promise<Sales> {
    return await this.salesService.updateSale(id, updateSalesDto);
  }

  @Delete('/:id')
  async deleteSale(@Param('id') id: string): Promise<Sales> {
    return await this.salesService.deleteSale(id);
  }
}
