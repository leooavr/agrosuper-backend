import { Module } from '@nestjs/common';

import { CommunesModule, ProvincesModule, RegionsModule } from './modules';
import { DatabaseModule } from './infraestructure';
@Module({
  imports: [DatabaseModule, CommunesModule, ProvincesModule, RegionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
