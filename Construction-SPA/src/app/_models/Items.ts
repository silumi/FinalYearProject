import { Shops } from './Shops';
import { ItemPhoto } from './ItemPhoto';
import { ItemReviews } from './itemReviews';
export interface Items {
    itemId: number;
    supplierId: number;
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
    itemReviews?: ItemReviews[];
}
