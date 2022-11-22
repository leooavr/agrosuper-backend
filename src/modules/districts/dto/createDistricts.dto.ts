import { IsString } from 'class-validator';

export class CreateDistrictsDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly idCommune: string;
}
