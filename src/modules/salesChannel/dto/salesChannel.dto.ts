import { IsOptional, IsString, IsUUID } from 'class-validator';

import { ClientsDto } from '../../clients/dto/clients.dto';

export class SalesChannelDto {
  @IsUUID()
  readonly id: string;

  @IsString()
  readonly name: string;

  @IsOptional()
  readonly clients: ClientsDto[];
}
