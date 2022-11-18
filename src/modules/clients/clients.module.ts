import { Module } from '@nestjs/common';

import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { ClientsRepository } from '../../repositories/clients.repository';

@Module({
  imports: [],
  controllers: [ClientsController],
  providers: [ClientsService, ClientsRepository],
})
export class ClientsModule {}
