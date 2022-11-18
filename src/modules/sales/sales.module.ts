import { Module } from '@nestjs/common';

import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';
import { SalesRepository } from '../../repositories/sales.repository';

@Module({
  imports: [],
  controllers: [SalesController],
  providers: [SalesService, SalesRepository],
})
export class SalesModule {}
