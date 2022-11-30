import { IsNumber, IsString } from 'class-validator';

export class UpdateBranchOfficesDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly name: string;
}
