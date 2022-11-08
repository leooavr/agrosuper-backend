import { Module } from '@nestjs/common';

import { CommunesModule, ProvincesModule, RegionsModule } from './modules';
@Module({
  imports: [CommunesModule, ProvincesModule, RegionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
