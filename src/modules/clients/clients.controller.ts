import { Controller, Get } from "@nestjs/common";

import { ClientsService } from "./clients.service";
import { Clients } from '../../entities/clients.entity';

@Controller('clients')
export class ClientsController {
    constructor (
        private readonly clientsService: ClientsService,
    ) {}
    @Get()
    async getClients(): Promise<Clients[]> {
        return await this.clientsService.getClients();
    }
}