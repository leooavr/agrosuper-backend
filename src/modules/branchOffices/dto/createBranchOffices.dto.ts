import { IsNumber, IsString } from 'class-validator';

export class CreateBranchOfficesDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly name: string;
}
