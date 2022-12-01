import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

import {
  Regions,
  Provinces,
  Communes,
  BranchOffices,
  Districts,
  Areas,
  MonthlyAreaPopulationProjections,
  DeliveryZones,
  Clients,
  MonthlyCommunalPopulationProjections,
  SalesChannel,
  Sales,
  ProteinSectors,
  ProjectedConsumptions,
  RealConsumptions,
  AreasCategory,
  Users
} from '../../entities';

dotenv.config();

const {
  TYPEORM_HOST,
  TYPEORM_USERNAME,
  TYPEORM_PASSWORD,
  TYPEORM_DATABASE,
  TYPEORM_PORT,
} = process.env;

const dataSource = new DataSource({
  type: 'postgres',
  host: TYPEORM_HOST,
  port: +TYPEORM_PORT,
  username: TYPEORM_USERNAME,
  password: TYPEORM_PASSWORD,
  database: TYPEORM_DATABASE,
  logging: true,
  synchronize: false,
  entities: [
    Regions,
    Provinces,
    Communes,
    BranchOffices,
    Districts,
    Areas,
    MonthlyAreaPopulationProjections,
    DeliveryZones,
    Clients,
    MonthlyCommunalPopulationProjections,
    SalesChannel,
    Sales,
    ProteinSectors,
    ProjectedConsumptions,
    RealConsumptions,
    AreasCategory,
    Users
  ],
  migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
});

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return dataSource.initialize();
    },
  },
];

export default dataSource;
