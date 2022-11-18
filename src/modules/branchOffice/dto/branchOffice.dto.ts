import { IsOptional, IsString, IsUUID, IsBoolean } from "class-validator";

import { CommunesDto } from '../../communes/dto/communes.dto';

export class BranchOfficeDto {
    @IsUUID()
    readonly id: string;

    @IsString()
    readonly name: string;

    @IsOptional()
    readonly commune: CommunesDto[];
}