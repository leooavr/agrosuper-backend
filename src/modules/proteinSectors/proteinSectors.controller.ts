import { Controller, Get } from "@nestjs/common";

import { ProteinSectorsService } from "./proteinSectors.service";
import { ProteinSectors } from '../../entities/proteinSectors.entity';

@Controller('proteinSectors')
export class ProteinSectorsController {
    constructor (
        private readonly proteinSectorsService: ProteinSectorsService,
    ) {}
    @Get()
    async getProteinSectors(): Promise<ProteinSectors[]> {
        return await this.proteinSectorsService.getProteinSectors();
    }
}
