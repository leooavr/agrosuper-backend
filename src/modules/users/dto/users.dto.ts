import { IsString, IsUUID } from 'class-validator';

export class UsersDto {
  @IsUUID()
  readonly id: string;

  @IsString()
  readonly name: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly rut: string;

}
