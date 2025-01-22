import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from "uuid";
import { CreateCarDTO, UpdateCarDTO } from './dtos';


@Injectable()
export class CarsService {

    private cars : Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Wrangler'
        }

    ]

    public getAllCars(): Car[] { 
        return this.cars;
    }


    public getById(id: string) : Car | null{
        const car = this.cars.find(car => car.id === id);
        if (!car)
            throw new NotFoundException(`Car with id '${id}' not found`);

        return car;
    }


    public createCar(carDto : CreateCarDTO): Car {
        const car: Car = {
            id: uuid(),
            brand: carDto.brand,
            model: carDto.model
        }

        this.cars.push(car);
        return car;
    }


    public updateCar( id:string, updateCarDTO : UpdateCarDTO) : Car {
        if (id !== updateCarDTO.id) 
            throw new NotFoundException(`Id's doesn't match`);
        let carDB = this.getById(id);
        if (!carDB)
            throw new NotFoundException(`Car with id '${updateCarDTO.id}' not found`);

        this.cars = this.cars.map(car => {
            if (car.id === id) {
                carDB = {
                    ...carDB!,
                    ...updateCarDTO,
                    id
                }
                return carDB;
            }
            return car;
        });
        return carDB;
    }


    public deleteCar( id: string) : void {
        let car = this.getById(id);
        this.cars = this.cars.filter(car => car.id !== id);
    }


}
