import { IsOptional, IsString, IsUUID, IsBoolean } from "class-validator";

import { ClientsDto } from "src/modules/clients/dto/clients.dto";
import { CommunesDto } from '../../communes/dto/communes.dto';

export class DeliveryZoneDto {
    @IsUUID()
    readonly id: string;

    @IsString()
    readonly name: string;

    @IsOptional()
    readonly commune: CommunesDto;

    @IsOptional()
    readonly clients: ClientsDto[];
}