import { IsOptional, IsString, IsUUID } from 'class-validator';

import { CommunesDto } from '../../communes/dto/communes.dto';

export class UpdateDeliveryZonesDto {
  @IsString()
  readonly name: string;

  @IsOptional()
  readonly idCommune: number;
}
