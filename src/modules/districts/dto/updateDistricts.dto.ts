import { IsString } from 'class-validator';

export class UpdateDistrictsDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly idCommune: string;
}
