import { Module } from '@nestjs/common';

import { CommunesModule, ProvincesModule, RegionsModule } from './modules';
import { DatabaseModule } from './infraestructure';
import { RepositoriesModule } from './repositories/repositories.module';
@Module({
  imports: [DatabaseModule, RepositoriesModule, CommunesModule, ProvincesModule, RegionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
