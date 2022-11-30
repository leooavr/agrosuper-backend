import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateProteinSectorsDto {
  @IsString()
  readonly name: string;
}
