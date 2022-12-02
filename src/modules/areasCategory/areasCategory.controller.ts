import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../security/guards/jwt-auth.guard';

import { AreasCategoryService } from './areasCategory.service';
import { AreasCategory } from '../../entities/areasCategory.entity';
import { CreateAreaCategoryDto, UpdateAreaCategoryDto } from './dto';

@UseGuards(JwtAuthGuard)
@Controller('areasCategory')
export class AreasCategoryController {
  constructor(private readonly areasCategoryService: AreasCategoryService) {}
  @Get()
  async getAreasCategory(): Promise<AreasCategory[]> {
    return await this.areasCategoryService.getAreasCategory();
  }

  @Post()
  async createAreaCategory(
    @Body() createAreasCategoryDto: CreateAreaCategoryDto,
  ): Promise<AreasCategory> {
    return await this.areasCategoryService.createAreaCategory(
      createAreasCategoryDto,
    );
  }

  @Put('/:id')
  async updateAreaCategory(
    @Param('id') id: string,
    @Body() updateAreasCategoryDto: UpdateAreaCategoryDto,
  ): Promise<AreasCategory> {
    return await this.areasCategoryService.updateAreaCategory(
      id,
      updateAreasCategoryDto,
    );
  }

  @Delete('/:id')
  async deleteAreaCategory(@Param('id') id: string): Promise<AreasCategory> {
    return await this.areasCategoryService.deleteAreaCategory(id);
  }
}
