'use client';

import { useAppSelector } from '@/Shared/Hooks';
import { CardsSelector } from '@/Entities/CardsSlice/Selector/cardsSelector';

const PostList = () => {

    const cards = useAppSelector(CardsSelector);

    cards.forEach((item) => {
        console.log(item);
    });

    return (
        <div>
            
        </div>
    );
};

export default PostList;