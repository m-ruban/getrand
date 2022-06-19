import { createSlice } from '@reduxjs/toolkit';

import { Article, Seo } from 'models/announce';
import { Company } from 'models/lastCompanies';
import { Category } from 'models/mainCategories';

export interface Game {
    id: number;
    release_date: string;
    public: number;
    main_img: string;
    rating: number;
    release_date_iso: string;
    seo: Seo;
    categories: Category[];
    articles: Article[];
    developer: Company;
    publisher: Company;
}

const initialState: Game[] = [];

export const slice = createSlice({
    name: 'games',
    initialState,
    reducers: {},
});

export default slice.reducer;
