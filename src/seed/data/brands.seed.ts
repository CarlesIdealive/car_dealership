import { v4 as uuid } from "uuid";
import { Brand } from "src/brands/entities/brand.entity";



    export const BRANDS_SEED : Brand[] = [
        {
            id: uuid(),
            name: 'Toyota',
            createdAt: new Date().getDate(),
        },
        {
            id: uuid(),
            name: 'Honda',
            createdAt: new Date().getDate(),
        },
        {
            id: uuid(),
            name: 'Ford',
            createdAt: new Date().getDate(),
        },
        {
            id: uuid(),
            name: 'Chevrolet',
            createdAt: new Date().getDate(),
        }
    ]