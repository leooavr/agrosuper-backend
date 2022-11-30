import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateAreaCategoryDto {
  @IsString()
  readonly name: string;
}
