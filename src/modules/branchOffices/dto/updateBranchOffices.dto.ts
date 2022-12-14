import { IsString } from 'class-validator';

export class UpdateBranchOfficesDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly name: string;
}
