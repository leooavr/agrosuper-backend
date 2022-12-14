import { IsOptional, IsString } from 'class-validator';

import { CommunesDto } from '../../communes/dto/communes.dto';

export class BranchOfficesDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly name: string;

  @IsOptional()
  readonly commune: CommunesDto[];
}
