import { Module } from '@nestjs/common';

import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';
import { SalesRepository } from '../../repositories/sales.repository';
import { ClientsRepository } from '../../repositories/clients.repository';
import { ProteinSectorsRepository } from '../../repositories/proteinSectors.repository';

@Module({
  imports: [],
  controllers: [SalesController],
  providers: [
    SalesService,
    SalesRepository,
    ClientsRepository,
    ProteinSectorsRepository,
  ],
})
export class SalesModule {}
