import { Controller, Get } from '@nestjs/common';

import { AreasService } from './areas.service';
import { Areas } from '../../entities/areas.entity';

@Controller('areas')
export class AreasController {
  constructor(private readonly areasService: AreasService) {}
  @Get()
  async getAreas(): Promise<Areas[]> {
    return await this.areasService.getAreas();
  }
}
