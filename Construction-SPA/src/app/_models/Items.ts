import { Shops } from './Shops';
import { ItemPhoto } from './ItemPhoto';
export interface Items {
    itemId: number;
    itemType: string;
    itemName: string;
    itemPrice: string;
    description: string;
    amountAvailable: string;
    shopName: string;
    address: string;
    city: string;
    contactNo: string;
    url: string;
    dateAdded: Date;
    shop: Shops[];
    itemPhoto?: ItemPhoto[];
}
