import { Controller, Get } from '@nestjs/common';

import { AreasCategoryService } from './areasCategory.service';
import { AreasCategory } from '../../entities/areasCategory.entity';

@Controller('areasCategory')
export class AreasCategoryController {
  constructor(private readonly areasCategoryService: AreasCategoryService) {}
  @Get()
  async getAreasCategory(): Promise<AreasCategory[]> {
    return await this.areasCategoryService.getAreasCategory();
  }
}
