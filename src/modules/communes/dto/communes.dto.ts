import { IsOptional, IsString, IsUUID } from "class-validator";

import { ProvincesDto } from '../../provinces/dto/provinces.dto';
import { BranchOfficesDto } from '../../branchOffices/dto/branchOffices.dto';
import { DistrictsDto } from '../../districts/dto/districts.dto';
import { DeliveryZonesDto } from '../../deliveryZones/dto/deliveryZones.dto';
import { ClientsDto } from '../../clients/dto/clients.dto';
import { MonthlyCommunalPopulationProjectionsDto } from '../../monthlyCommunalPopulationProjections/dto/monthlyCommunalPopulationProjections.dto';

export class CommunesDto {
    @IsUUID()
    readonly id: string;

    @IsString()
    readonly name: string;

    @IsOptional()
    readonly province: ProvincesDto;

    @IsOptional()
    readonly branchOffice: BranchOfficesDto;

    @IsOptional()
    readonly districts: DistrictsDto[];

    @IsOptional()
    readonly deliveryZones: DeliveryZonesDto;

    @IsOptional()
    readonly clients: ClientsDto;

    @IsOptional()
    readonly monthlyCommunalPopulationProjection: MonthlyCommunalPopulationProjectionsDto[];
}