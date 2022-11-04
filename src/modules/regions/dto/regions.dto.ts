import { IsNumber, IsOptional, IsString } from "class-validator";

import { ProvincesDto } from '../../provinces/dto/provinces.dto';

export class RegionsDto {
    @IsNumber()
    readonly id: number;

    @IsString()
    readonly name:string;

    @IsOptional()
    readonly provinces: ProvincesDto[];
}