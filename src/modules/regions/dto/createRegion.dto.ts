import { IsNumber, IsString } from 'class-validator';

export class CreateRegionDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly name: string;
}
