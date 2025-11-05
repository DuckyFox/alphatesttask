import { RootState } from '@/App/store/store';

export const CardsSelector = (state: RootState) => state.cardsReducer.cardsData;