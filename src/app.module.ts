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
    ClientsModule,
    MonthlyCommunalPopulationProjectionsModule,
    SalesChannelModule,
    SalesModule,
    ProteinSectorsModule,
    ProjectedConsumptionsModule,
    RealConsumptionsModule,
    AreasCategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
