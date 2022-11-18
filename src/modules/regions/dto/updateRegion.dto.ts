import { IsString } from 'class-validator';

export class UpdateRegionDto {
  @IsString()
  readonly name: string;
}
