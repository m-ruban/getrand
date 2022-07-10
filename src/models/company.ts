import { createSlice } from '@reduxjs/toolkit';

import { GameSearchItem } from 'models/games';
import { Company as CompanySearchItem } from 'models/lastCompanies';

interface Company extends CompanySearchItem {
    location: string;
    link: string;
    published_games: GameSearchItem[];
    developed_games: GameSearchItem[];
}

const initialState: Company = {
    id: 0,
    main_img: '',
    created_iso: '',
    hasText: false,
    location: '',
    link: '',
    seo: {
        id: 0,
        name: '',
        keyword: '',
        descr: '',
        full_text: '',
        render_tree: {
            component: '',
            props: {},
            render: '',
            children: [],
        },
    },
    published_games: [],
    developed_games: [],
};

export const slice = createSlice({
    name: 'company',
    initialState,
    reducers: {},
});

export default slice.reducer;
