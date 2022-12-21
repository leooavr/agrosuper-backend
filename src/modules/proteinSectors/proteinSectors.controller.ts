import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';

import { ProteinSectorsService } from './proteinSectors.service';
import { ProteinSectors } from '../../entities/proteinSectors.entity';
import { CreateProteinSectorsDto, UpdateProteinSectorsDto } from './dto';

@Controller('proteinSectors')
export class ProteinSectorsController {
  constructor(private readonly proteinSectorsService: ProteinSectorsService) {}
  @Get()
  async getProteinSectors(): Promise<ProteinSectors[]> {
    return await this.proteinSectorsService.getProteinSectors();
  }

  @Post()
  async createProteinSectors(
    @Body() createProteinSectorsDto: CreateProteinSectorsDto,
  ): Promise<ProteinSectors> {
    return await this.proteinSectorsService.createProteinSectors(
      createProteinSectorsDto,
    );
  }

  @Put('/:id')
  async updateProteinSectors(
    @Param('id') id: string,
    @Body() updateProteinSectorsDto: UpdateProteinSectorsDto,
  ): Promise<ProteinSectors> {
    return await this.proteinSectorsService.updateProteinSectors(
      id,
      updateProteinSectorsDto,
    );
  }

  @Delete('/:id')
  async deleteProteinSectors(@Param('id') id: string): Promise<ProteinSectors> {
    return await this.proteinSectorsService.deleteProteinSectors(id);
  }
}
