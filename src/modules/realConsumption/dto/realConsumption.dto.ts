import { IsOptional, IsString, IsUUID, IsBoolean, IsNumber } from "class-validator";

import { ProteinSectorDto } from 'src/modules/proteinSector/dto/proteinSector.dto';

export class RealConsumptionDto {
    @IsUUID()
    readonly id: string;

    @IsNumber()
    readonly year: number;

    @IsString()
    readonly month: string;

    @IsNumber()
    readonly consumption: number;

    @IsOptional()
    readonly proteinSector: ProteinSectorDto 
}