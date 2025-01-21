import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dtos/create-car.dto';

@Controller('cars')
// @UsePipes(ValidationPipe)
export class CarsController {
    // private readonly _carsService = Inject(CarsService)
    constructor(private _carsService: CarsService) {}

    @Get()
    getAllCars(){
        return this._carsService.getAllCars();
    }

    @Get(':id')
    getCarById(@Param('id', ParseUUIDPipe) id: string)
    {
        return this._carsService.getById(id);
    }


    @Post()
    createCar( @Body() createCarDTO: CreateCarDTO){
        return {
            createCarDTO
        }
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseUUIDPipe) id: string, 
        @Body() body: any)
    {
        return {
            id,
            body
        }
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id: string){
        return {
            method: 'delete',
            id
        }
    }



}
