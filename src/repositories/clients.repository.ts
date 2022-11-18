import { Injectable } from '@nestjs/common';

import dataSource from '../infraestructure/database/database.providers';
import { Clients } from '../entities';

@Injectable()
export class ClientsRepository {
  private clientsRepository = dataSource.getRepository(Clients);
  public async getClients(): Promise<Clients[]> {
    try {
      return this.clientsRepository.find();
    } catch (error) {
      throw error;
    }
  }
}
