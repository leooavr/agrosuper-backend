import { IsOptional, IsString, IsUUID, IsNumber } from 'class-validator';

import { ClientsDto } from '../../clients/dto/clients.dto';
import { ProteinSectorsDto } from '../../proteinSectors/dto/proteinSectors.dto';

export class SalesDto {
  @IsUUID()
  readonly id: string;

  @IsNumber()
  readonly year: string;

  @IsString()
  readonly month: string;

  @IsNumber()
  readonly salesKg: number;

  @IsNumber()
  readonly salesNeta: number;

  @IsOptional()
  readonly proteinSector: ProteinSectorsDto;

  @IsOptional()
  readonly client: ClientsDto;
}
