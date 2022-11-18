import { IsOptional, IsString, IsUUID, IsNumber } from "class-validator";

import { DeliveryZonesDto } from "src/modules/deliveryZones/dto/deliveryZones.dto";
import { CommunesDto } from '../../communes/dto/communes.dto';
import { SalesChannelDto } from '../../salesChannel/dto/salesChannel.dto';
import { AreasDto } from '../../areas/dto/areas.dto';
import { SalesDto } from '../../sales/dto/sales.dto';

export class ClientsDto {
    @IsUUID()
    readonly id: string;

    @IsString()
    readonly rut: string;

    @IsString()
    readonly address: string;

    @IsString()
    readonly lat: string;

    @IsString()
    readonly long: string;

    @IsString()
    readonly socialReason: string;

    @IsNumber()
    readonly localClient: number;

    @IsOptional()
    readonly commune: CommunesDto;

    @IsOptional()
    readonly saleChannel: SalesChannelDto;

    @IsOptional()
    readonly deliveryZone: DeliveryZonesDto; 

    @IsOptional()
    readonly area: AreasDto;

    @IsOptional()
    readonly sales: SalesDto;
}