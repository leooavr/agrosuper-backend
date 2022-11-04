import { IsOptional, IsString } from "class-validator";

import { ProvincesDto } from '../../provinces/dto/provinces.dto';

export class CommunesDto {
    @IsString()
    readonly id: string;

    @IsString()
    readonly name: string;

    @IsOptional()
    readonly province: ProvincesDto;
}