import { Controller, Get } from '@nestjs/common';

import { ProvincesService } from './provinces.service';
import { Provinces } from '../../entities/provinces.entity';

@Controller('provinces')
export class ProvincesController {
  constructor(private readonly provincesService: ProvincesService) {}
  @Get()
  async getProvinces(): Promise<Provinces[]> {
    return await this.provincesService.getProvinces();
  }
}
