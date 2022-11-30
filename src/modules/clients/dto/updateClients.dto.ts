import { IsOptional, IsString } from 'class-validator';

export class UpdateClientsDto {
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

  @IsOptional()
  readonly idCommune: number;

  @IsOptional()
  readonly idSaleChannel: string;

  @IsOptional()
  readonly idDeliveryZone: string;

  @IsOptional()
  readonly idArea: string;
}
