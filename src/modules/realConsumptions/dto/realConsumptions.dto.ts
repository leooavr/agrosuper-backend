import { IsOptional, IsString, IsUUID, IsNumber } from "class-validator";

import { ProteinSectorsDto } from 'src/modules/proteinSectors/dto/proteinSectors.dto';

export class RealConsumptionsDto {
    @IsUUID()
    readonly id: string;

    @IsNumber()
    readonly year: number;

    @IsString()
    readonly month: string;

    @IsNumber()
    readonly consumption: number;

    @IsOptional()
    readonly proteinSector: ProteinSectorsDto 
}