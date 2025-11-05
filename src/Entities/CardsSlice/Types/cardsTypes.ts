export interface CardType {
    img: string;
    title: string;
    desc: string;
    createdAt: string;
    isImportant: boolean;
    id: string;
}

export interface CardsState {
    cardsData: CardType[],
}