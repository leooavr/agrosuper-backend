import { Module } from '@nestjs/common';

import { CommunesModule, ProvincesModule, RegionsModule, SalesChannelModule } from './modules';
import { DatabaseModule } from './infraestructure';
import { RepositoriesModule } from './repositories/repositories.module';
@Module({
  imports: [DatabaseModule, RepositoriesModule, CommunesModule, ProvincesModule, RegionsModule, SalesChannelModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
