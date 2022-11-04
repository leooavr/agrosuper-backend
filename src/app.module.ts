import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

import { CommunesModule } from "./modules";
import { Provinces, Regions, Communes, SalesChannel } from './entities';

dotenv.config();

const {
  TYPEORM_HOST,
  TYPEORM_USERNAME,
  TYPEORM_PASSWORD,
  TYPEORM_DATABASE,
  TYPEORM_SYNCHRONIZE,
} = process.env;

@Module({
  imports: [
    CommunesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: TYPEORM_HOST,
      username: TYPEORM_USERNAME,
      password: TYPEORM_PASSWORD,
      database: TYPEORM_DATABASE,
      entities: [Provinces, Regions, Communes, SalesChannel],
      synchronize: TYPEORM_SYNCHRONIZE == 'true' ? true : false,
      retryDelay: 3000,
      retryAttempts: 10,
      keepConnectionAlive: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
