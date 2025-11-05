import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CardsState, CardType } from '../Types/cardsTypes';

const initialState: CardsState = {
    cardsData: [
        {
            'img': 'https://picsum.photos/seed/iImswrTYZa/3675/1717?blur=7',
            'title': 'Von Inc',
            'desc': 'Officiis degenero suadeo centum inventore sophismata veritas ait solium. Casus cito aperiam considero vesco verecundia. Sunt tollo perferendis abscido uter.\nSuppellex corporis suscipio tego vulgus corrupti. Pariatur similique amplitudo quos absorbeo volva vester uterque strues aperio. Vel sopor conturbo deserunt demergo pecus voluptates vomer.\nCinis ager benevolentia bos amplus. Absque consectetur comparo canis cervus torqueo conicio casus. Cena talis pecus copiose creta pax cornu coepi decor.',
            'createdAt': '2002-01-15T14:43:25.303Z',
            'isImportant': false,
            'id': '1',
        },
        {
            'img': 'https://picsum.photos/seed/sJwmnAJk/3296/1671?grayscale&blur=3',
            'title': 'Fisher - Marvin',
            'desc': 'Caecus inventore deripio deleo auditor canis decipio cogito deduco. Argentum adsuesco conqueror corrigo dicta vaco aegre ait. Ulciscor attonbitus vicissitudo repudiandae.',
            'createdAt': '1948-04-20T16:53:43.765Z',
            'isImportant': false,
            'id': '2',
        },
        {
            'img': 'https://picsum.photos/seed/HkZXjn2/2173/2265',
            'title': 'Ward, Ziemann and Bergnaum',
            'desc': 'Peccatus facere attonbitus ambitus addo sumo sub.\nCattus facere tondeo cultellus abscido vito armarium deinde corrumpo possimus.\nCorreptius tersus atavus.\nTergum sonitus spero amaritudo suppono perspiciatis dicta ipsam antea bos.',
            'createdAt': '2002-11-11T17:32:19.080Z',
            'isImportant': false,
            'id': '3',
        },
        {
            'img': 'https://picsum.photos/seed/wY7glBl9p/3593/2890?blur=2',
            'title': 'Dare Group',
            'desc': 'Amitto viduo verbum ceno deleo defendo caries aro ocer.',
            'createdAt': '1951-01-15T01:52:53.903Z',
            'isImportant': false,
            'id': '4',
        },
        {
            'img': 'https://picsum.photos/seed/zepLnfG1sD/2183/369?grayscale&blur=6',
            'title': 'Herman - Stamm',
            'desc': 'Ultio ultra neque toties videlicet comptus ullam. Incidunt theologus clarus xiphias curtus alveus turbo. Cerno adsidue comburo victus ceno depromo. Acervus degusto eligendi. Capto vomito tonsor.',
            'createdAt': '1959-03-24T19:28:21.465Z',
            'isImportant': false,
            'id': '5',
        },
        {
            'img': 'https://picsum.photos/seed/Cot5H/398/1558?grayscale&blur=4',
            'title': 'Lang, Connelly and McGlynn',
            'desc': 'Vaco solium conduco illum. Deleniti accedo toties bellicus apostolus dolor pecco. Corona tersus deputo debeo vesco thorax tubineus concido.\nClementia succurro asperiores. Bardus patior defluo conculco amplexus. Cariosus deporto certe tondeo tero surculus derideo demergo uxor.\nIpsum super abstergo umquam ago magnam decet sordeo subvenio. Vulgivagus aureus apostolus asporto curia argumentum antea. Abduco fugit viscus appono fuga repellat carpo solus.',
            'createdAt': '1981-09-03T19:48:43.952Z',
            'isImportant': false,
            'id': '6',
        },
    ],
};

export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {

    },
});

export default counterSlice.reducer;





