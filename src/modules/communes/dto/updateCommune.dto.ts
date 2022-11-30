import { IsString, IsNumber } from 'class-validator';

export class UpdateCommunesDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsString()
  readonly idProvince: number;

  @IsString()
  readonly idBranchOffice: number;
}
