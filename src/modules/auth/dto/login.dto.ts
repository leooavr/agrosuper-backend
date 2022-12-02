import { IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  readonly rut: string;

  @IsString()
  readonly password: string;
}
