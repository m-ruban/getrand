import { createSlice } from '@reduxjs/toolkit';

import { Article, Seo } from 'models/announce';
import { Company } from 'models/lastCompanies';
import { Category } from 'models/mainCategories';

export interface GameSearchItem {
    id: number;
    release_date: string;
    public: number;
    main_img: string;
    preview_main_img: string;
    rating: number;
    release_date_iso: string;
    seo: Seo;
    developer: Company;
    publisher: Company;
}

export interface Game extends GameSearchItem {
    categories: Category[];
    articles: Article[];
}

const initialState: Game[] = [];

export const slice = createSlice({
    name: 'games',
    initialState,
    reducers: {},
});

export default slice.reducer;
