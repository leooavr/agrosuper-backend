import { IsOptional, IsString, IsUUID, IsBoolean } from "class-validator";

import { SalesDto } from '../../sales/dto/sales.dto';
import { ProjectedConsumptionDto } from '../../projectedConsumption/dto/projectedConsumption.dto';
import { RealConsumptionDto } from '../../realConsumption/dto/realConsumption.dto';

export class ProteinSectorDto {
    @IsUUID()
    readonly id: string;

    @IsString()
    readonly name: string;

    @IsOptional()
    readonly sales: SalesDto[];

    @IsOptional()
    readonly projectedConsumption: ProjectedConsumptionDto;

    @IsOptional()
    readonly realConsumption: RealConsumptionDto; 
}