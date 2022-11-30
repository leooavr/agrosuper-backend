import { IsNumber, IsString } from 'class-validator';

export class UpdateSalesChannelDto {
  @IsString()
  readonly name: string;
}
