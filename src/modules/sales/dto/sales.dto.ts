import { IsOptional, IsString, IsUUID, IsBoolean, IsNumber } from "class-validator";

import { ClientsDto } from '../../clients/dto/clients.dto';
import { ProteinSectorDto } from '../../proteinSector/dto/proteinSector.dto';

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
    readonly proteinSector: ProteinSectorDto;

    @IsOptional()
    readonly client: ClientsDto;
}