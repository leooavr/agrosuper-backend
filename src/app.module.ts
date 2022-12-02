import { Module } from '@nestjs/common';

import {
  AreasCategoryModule,
  AreasModule,
  BranchOfficesModule,
  ClientsModule,
  CommunesModule,
  DeliveryZonesModule,
  DistrictsModule,
  MonthlyAreaPopulationProjectionsModule,
  MonthlyCommunalPopulationProjectionsModule,
  ProjectedConsumptionsModule,
  ProteinSectorsModule,
  ProvincesModule,
  RealConsumptionsModule,
  RegionsModule,
  SalesChannelModule,
  SalesModule,
  UsersModule,
  AuthModule,
} from './modules';

import { DatabaseModule } from './infraestructure';
@Module({
  imports: [
    DatabaseModule,
    RegionsModule,
    ProvincesModule,
    CommunesModule,
    BranchOfficesModule,
    DistrictsModule,
    AreasModule,
    MonthlyAreaPopulationProjectionsModule,
    DeliveryZonesModule,
    MonthlyCommunalPopulationProjectionsModule,
    ClientsModule,
    SalesChannelModule,
    SalesModule,
    ProteinSectorsModule,
    ProjectedConsumptionsModule,
    RealConsumptionsModule,
    AreasCategoryModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
