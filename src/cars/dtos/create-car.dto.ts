
//Es una clase no un interface para poder validar los datos que se envian
// Class-validator es una libreria que nos permite validar los datos que se envian a traves de los DTOs
import { IsString } from "class-validator";

// decorador @IsString
export class CreateCarDTO {
    @IsString({message: 'El campo brand debe ser un string'})
    readonly brand: string;

    @IsString()    
    readonly model: string;
}