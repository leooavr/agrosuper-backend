import { IsString } from 'class-validator';

export class UpdateCommunesDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly idProvince: string;

  @IsString()
  readonly idBranchOffice: string;
}
