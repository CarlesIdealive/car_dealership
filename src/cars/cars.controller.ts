import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dtos/create-car.dto';
import { Car } from './interfaces/car.interface';
import { UpdateCarDTO } from './dtos/update-car.dto';

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
    createCar( @Body() createCarDTO: CreateCarDTO) : Car {
        const car : Car = this._carsService.createCar(createCarDTO);
        return car;
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseUUIDPipe) id: string, 
        @Body() updateCarDTO: UpdateCarDTO)
    {
        return this._carsService.updateCar(id, updateCarDTO);
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string){
        this._carsService.deleteCar(id);        
    }



}
