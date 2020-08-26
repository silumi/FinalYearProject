import { ServiceRating } from 'src/app/_models/serviceRating';
export interface ServiceReviews {
    id: number;
    review: string;
    reviewAdded: Date;
    reviewSenderId: number;
    reviewRecepientId: number;
    reviewSenderUserName: string;
    reviewRecepientUserName: string;
    reviewSenderPhotoUrl: string;
    reviewRecepientPhotoUrl: string;
    serviceRating: ServiceRating[];
}
