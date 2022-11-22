import { Module } from '@nestjs/common';

import { CommunesController } from './communes.controller';
import { CommunesService } from './communes.service';
import { CommunesRepository } from '../../repositories/communes.repository';
import { ProvincesRepository } from '../../repositories/provinces.repository';
import { BranchOfficesRepository } from '../../repositories/branchOffices.repository';

@Module({
  imports: [],
  controllers: [CommunesController],
  providers: [
    CommunesService,
    CommunesRepository,
    BranchOfficesRepository,
    ProvincesRepository,
  ],
})
export class CommunesModule {}
