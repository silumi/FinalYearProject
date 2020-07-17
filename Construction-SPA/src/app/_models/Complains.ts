export interface Complaints {
    comId: number;
    dateCreated: Date;
    complain: string;
    senderId: number;
    recepientId: number;
    recipientUserName: string;
    recipientPhotoUrl: string;
    senderUserName: string;
    senderPhotoUrl: string;
    checked: boolean;
    dateChecked: Date;
}
