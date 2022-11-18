import { IsOptional, IsString, IsUUID } from "class-validator";

import { CommunesDto } from '../../communes/dto/communes.dto';

export class BranchOfficesDto {
    @IsUUID()
    readonly id: string;

    @IsString()
    readonly name: string;

    @IsOptional()
    readonly commune: CommunesDto[];
}