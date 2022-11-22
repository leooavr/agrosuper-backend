import { IsString } from 'class-validator';

export class CreateCommunesDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly idProvince: string;

  @IsString()
  readonly idBranchOffice: string;
}
