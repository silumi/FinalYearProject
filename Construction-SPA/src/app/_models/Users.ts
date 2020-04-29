import { ServicePhotos } from './ServicePhoto';
import { UserPhotos } from './UserPhotos';

export interface User {
    id: number;
    userName: string;
    firstName: string;
    lastName: string;
    age: number;
    address: string;
    city: string;
    postalCode: number;
    gender: string;
    contactNo: number;
    isJobSeeker: boolean;
    isSupplier: boolean;
    dateCreated: Date;
    lastActive: Date;
    photoUrl: string;
    about?: string;
    lookingFor?: string;
    servicePhotoUrl?: string;
    serviceType?: string;
    chargers: string;
    experience?: string;
    photos?: UserPhotos[];
    servicePhotos?: ServicePhotos[];

}
