export interface Invoice {
     invoId: number;
     dateCreated: Date;
     supplierId: number;
     recipientId: number;
     shopId: number;
     completed: boolean;
     isRead: boolean;
     quantity: number;
     totalPrice: DoubleRange;
     supplierUserName: string;
     recipientUserName: string;
     supplierPhotoUrl: string;
     recipientPhotoUrl: string;
   // totalPrice:  { get; set; }
     dateCompleted: Date;
}
