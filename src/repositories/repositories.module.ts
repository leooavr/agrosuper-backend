import { Global, Module } from '@nestjs/common';
import { CommunesRepository } from './communes.repository';

@Global()
@Module({
  providers: [CommunesRepository],
  exports: [CommunesRepository],
})
export class RepositoriesModule {}
