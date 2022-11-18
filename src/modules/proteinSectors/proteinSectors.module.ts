import { Module } from '@nestjs/common';

import { ProteinSectorsController } from './proteinSectors.controller';
import { ProteinSectorsService } from './proteinSectors.service';
import { ProteinSectorsRepository } from '../../repositories/proteinSectors.repository';

@Module({
  imports: [],
  controllers: [ProteinSectorsController],
  providers: [ProteinSectorsService, ProteinSectorsRepository],
})
export class ProteinSectorsModule {}
