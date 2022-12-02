import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../security/guards/jwt-auth.guard';

import { CommunesService } from './communes.service';
import { Communes } from '../../entities/communes.entity';
import { CreateCommunesDto, UpdateCommunesDto } from './dto';

@UseGuards(JwtAuthGuard)
@Controller('communes')
export class CommunesController {
  constructor(private readonly communesService: CommunesService) {}
  @Get()
  async getCommunes(): Promise<Communes[]> {
    return await this.communesService.getCommunes();
  }

  @Post()
  async createCommune(
    @Body() createCommunesDto: CreateCommunesDto,
  ): Promise<Communes> {
    return await this.communesService.createCommune(createCommunesDto);
  }

  @Put('/:id')
  async updateCommune(
    @Param('id') id: number,
    @Body() updateCommunesDto: UpdateCommunesDto,
  ): Promise<Communes> {
    return await this.communesService.updateCommune(id, updateCommunesDto);
  }

  @Delete('/:id')
  async deleteCommune(@Param('id') id: number): Promise<Communes> {
    return await this.communesService.deleteCommune(id);
  }
}
