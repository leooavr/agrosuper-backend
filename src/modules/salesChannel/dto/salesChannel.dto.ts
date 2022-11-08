import { IsString, IsUUID } from "class-validator";

export class SalesChannelDto {
    @IsUUID()
    readonly id: string;

    @IsString()
    readonly name: string;
}