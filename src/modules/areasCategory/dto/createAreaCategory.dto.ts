import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateAreaCategoryDto {
  @IsString()
  readonly name: string;
}
