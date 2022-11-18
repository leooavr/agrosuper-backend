import { IsOptional, IsString, IsUUID, IsNumber, IsBoolean } from "class-validator";

import { CommunesDto } from '../../communes/dto/communes.dto';

export class MonthlyCommunalPopulationProjectionDto {
    @IsUUID()
    readonly id: string;

    @IsNumber()
    readonly year: number;

    @IsString()
    readonly month: string;

    @IsNumber()
    readonly projection: number;

    @IsBoolean()
    readonly isReal: boolean;

    @IsOptional()
    readonly commune: CommunesDto;
}