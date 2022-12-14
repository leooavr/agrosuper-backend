import { IsString } from 'class-validator';

export class CreateBranchOfficesDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly name: string;
}
