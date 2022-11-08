import { IsOptional, IsString, IsUUID } from "class-validator";

import { ProvincesDto } from '../../provinces/dto/provinces.dto';

export class CommunesDto {
    @IsUUID()
    readonly id: string;

    @IsString()
    readonly name: string;

    @IsOptional()
    readonly province: ProvincesDto;
}