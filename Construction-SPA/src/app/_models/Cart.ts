import { ItemPhotos } from './ItemPhotos';

export interface Cart {
    id: number;
    username: string;
    ItemName: string;
    price: string;
    amount: number;
    total: string;
    status: string;
    ItemPhoto?: ItemPhotos[]; // itemPhotos
}
