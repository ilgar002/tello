import { v4 as uuidv4 } from 'uuid';

export const optionsOrder = [
    {
        label: 'Ən yenilər',
        actions: {
            sortBy: "created",
            sortDirection: 'desc',
        }
    },
    {
        label: 'Ada görə',
        actions: {
            sortBy: "name",
            sortDirection: 'asc',
        }
    },
    {
        label: 'Qiymətə görə',
        actions: {
            sortBy: "price",
            sortDirection: 'desc',
        }
    }
]

export const optionsFilter = [
    { id: uuidv4(), label: 'Apple', value: ['iphone', 'ipad', 'airpods', 'macbook'], checked: false },
    { id: uuidv4(), label: 'Samsung', value: ['samsung'], checked: false },
    { id: uuidv4(), label: "Xiaomi", value: ['xiaomi'], checked: false },
    { id: uuidv4(), label: 'Honor', value: ['honor'], checked: false }
]