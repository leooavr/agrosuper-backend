import { IsOptional, IsString, IsUUID, IsBoolean } from "class-validator";

import { DistrictsDto } from "src/modules/districts/dto/districts.dto";
import { AreasCategoryDto } from '../../areasCategory/dto/areasCategory.dto';
import { ClientsDto } from '../../clients/dto/clients.dto';

export class AreasDto {
    @IsUUID()
    readonly id: string;

    @IsString()
    readonly name: string;

    @IsString()
    readonly surface: string;

    @IsBoolean()
    readonly isUrban: boolean;

    @IsString()
    readonly participation: string;

    @IsOptional()
    readonly areaCategory: AreasCategoryDto;

    @IsOptional()
    readonly district: DistrictsDto;

    @IsOptional()
    readonly clients: ClientsDto;
}