import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateProteinSectorsDto {
  @IsString()
  readonly name: string;
}
