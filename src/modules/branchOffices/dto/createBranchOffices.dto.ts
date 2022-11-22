import { IsString } from 'class-validator';

export class CreateBranchOfficesDto {
  @IsString()
  readonly name: string;
}
