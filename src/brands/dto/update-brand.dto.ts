import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';
import { IsString, IsUUID } from 'class-validator';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {

    @IsString()
    @IsUUID()
    id: string;
    
}
