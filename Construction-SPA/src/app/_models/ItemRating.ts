export interface ItemRating {
    dateCreated: Date;
    itemId: number;
    votes: number;
    rate: DoubleRange;
}