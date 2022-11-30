import { IsNumber, IsString } from 'class-validator';

export class CreateSalesChannelDto {
  @IsString()
  readonly name: string;
}
