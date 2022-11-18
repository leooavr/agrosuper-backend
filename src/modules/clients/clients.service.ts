import { Injectable, Logger } from '@nestjs/common';

import { Clients } from '../../entities/clients.entity';
import { ClientsRepository } from '../../repositories/clients.repository';

@Injectable()
export class ClientsService {
  private logger: Logger = new Logger(ClientsService.name);

  constructor(private clientsRepository: ClientsRepository) {}

  async getClients(): Promise<Clients[]> {
    try {
      this.logger.debug('getting clients');
      return this.clientsRepository.getClients();
    } catch (error) {
      throw error;
    }
  }
}
