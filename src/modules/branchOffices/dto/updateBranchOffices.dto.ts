import { IsString } from 'class-validator';

export class UpdateBranchOfficesDto {
  @IsString()
  readonly name: string;
}
