import { IsOptional, IsString, IsUUID } from "class-validator";

import { ProvincesDto } from '../../provinces/dto/provinces.dto';
import { BranchOfficeDto } from '../../branchOffice/dto/branchOffice.dto';
import { DistrictsDto } from '../../districts/dto/districts.dto';
import { DeliveryZoneDto } from '../../deliveryZones/dto/deliveryZone.dto';
import { ClientsDto } from '../../clients/dto/clients.dto';
import { MonthlyCommunalPopulationProjectionDto } from '../../monthlyCommunalPopulationProjection/dto/monthlyCommunalPopulationProjection.dto';

export class CommunesDto {
    @IsUUID()
    readonly id: string;

    @IsString()
    readonly name: string;

    @IsOptional()
    readonly province: ProvincesDto;

    @IsOptional()
    readonly branchOffice: BranchOfficeDto;

    @IsOptional()
    readonly districts: DistrictsDto[];

    @IsOptional()
    readonly deliveryZones: DeliveryZoneDto;

    @IsOptional()
    readonly clients: ClientsDto;

    @IsOptional()
    readonly monthlyCommunalPopulationProjection: MonthlyCommunalPopulationProjectionDto[];
}