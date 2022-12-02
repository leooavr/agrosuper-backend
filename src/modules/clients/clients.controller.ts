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
import { JwtAuthGuard } from '../../security/guards/jwt-auth.guard';

import { ClientsService } from './clients.service';
import { Clients } from '../../entities/clients.entity';
import { CreateClientsDto, UpdateClientsDto } from '../clients/dto';

@UseGuards(JwtAuthGuard)
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}
  @Get()
  async getClients(): Promise<Clients[]> {
    return await this.clientsService.getClients();
  }

  @Post()
  async createClient(
    @Body() createClientsDto: CreateClientsDto,
  ): Promise<Clients> {
    return await this.clientsService.createClient(createClientsDto);
  }

  @Put('/:id')
  async updateClient(
    @Param('id') id: string,
    @Body() updateClientsDto: UpdateClientsDto,
  ): Promise<Clients> {
    return await this.clientsService.updateClient(id, updateClientsDto);
  }

  @Delete('/:id')
  async deleteClient(@Param('id') id: string): Promise<Clients> {
    return await this.clientsService.deleteClient(id);
  }
}
