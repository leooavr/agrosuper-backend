import { IsString } from 'class-validator';

export class LoginResponseDto {
  @IsString()
  readonly token: string;

  @IsString()
  readonly rut: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly name: string;
}
