import { Module } from '@nestjs/common';

import {
  CommunesModule,
  ProvincesModule,
  RegionsModule,
  SalesChannelModule,
} from './modules';
import { DatabaseModule } from './infraestructure';
@Module({
  imports: [
    DatabaseModule,
    CommunesModule,
    ProvincesModule,
    RegionsModule,
    SalesChannelModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
