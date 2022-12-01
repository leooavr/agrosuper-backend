import { IsString } from 'class-validator';

export class UpdateUsersDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly rut: string;

}
