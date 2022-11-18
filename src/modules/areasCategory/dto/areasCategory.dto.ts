import { IsOptional, IsString, IsUUID } from 'class-validator';

import { AreasDto } from '../../areas/dto/areas.dto';

export class AreasCategoryDto {
  @IsUUID()
  readonly id: string;

  @IsString()
  readonly name: string;

  @IsOptional()
  readonly areaCategory: AreasDto[];
}
