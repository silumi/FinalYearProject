export interface Message {
    Id: number;
    senderId: number;
    senderUserName: string;
    senderPhotoUrl: string;
    recepientId: number;
    recepientUserName: string;
    recepientPhotoUrl: string;
    content: string;
    isRead: boolean;
    dateRead: Date;
    messageSent: Date; //

}
