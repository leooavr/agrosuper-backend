import { Controller, Get } from '@nestjs/common';

import { DistrictsService } from './districts.service';
import { Districts } from '../../entities/districts.entity';

@Controller('districts')
export class DistrictsController {
  constructor(private readonly districtsService: DistrictsService) {}
  @Get()
  async getDistricts(): Promise<Districts[]> {
    return await this.districtsService.getDistricts();
  }
}
