import { IsNumber, IsOptional, IsString } from 'class-validator';

import { CommunesDto } from '../../communes/dto/communes.dto';

export class BranchOfficesDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsOptional()
  readonly commune: CommunesDto[];
}
