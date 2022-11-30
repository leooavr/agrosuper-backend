import { IsNumber, IsString } from 'class-validator';

import { CommunesDto } from '../../communes/dto/communes.dto';

export class CreateDeliveryZonesDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly idCommune: number;
}
