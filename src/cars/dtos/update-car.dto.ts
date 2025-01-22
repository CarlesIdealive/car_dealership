
//Es una clase no un interface para poder validar los datos que se envian
// Class-validator es una libreria que nos permite validar los datos que se envian a traves de los DTOs
import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

// decorador @IsString
export class UpdateCarDTO {

    @IsUUID()
    @IsString()
    readonly id: string;

    @IsString({message: 'El campo brand debe ser un string'})
    @IsOptional()
    readonly brand?: string;

    @IsString()
    @IsOptional()
    // @MinLength(3)
    readonly model?: string;
}