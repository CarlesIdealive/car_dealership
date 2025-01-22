import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from "uuid";


@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'Toyota',
    //   createdAt: new Date().getTime(),
    // },
    // {
    //   id: uuid(),
    //   name: 'Honda',
    //   createdAt: new Date().getTime(),
    // },
  ];


  create(createBrandDto: CreateBrandDto) : Brand {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name,
      createdAt: new Date().getTime(),
    };
    this.brands.push(brand);
    return brand;
  }

  findAll() : Brand[] {
    return this.brands;
  }

  findOne(id: string) {
    const brand : Brand | undefined = this.brands.find( brand => brand.id === id);
    if (!brand) 
      throw new NotFoundException(`Brand with id '${id}' not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    if (id !== updateBrandDto.id)
      throw new NotFoundException(`Id's doesn't match`);
    let brandDB = this.findOne(id);
    this.brands = this.brands.map( brand => {
      if (brand.id === id) {
        brandDB = {
          ...brand,
          ...updateBrandDto,
          id,
          updatedAt: new Date().getTime(),
        }
        return brandDB;
      }
      return brand;
    });
    return brandDB;
  }

  remove(id: string) {
    let brand = this.findOne(id);
    this.brands = this.brands.filter( brand => brand.id !== id);
  }
}
