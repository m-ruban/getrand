import { createSlice } from '@reduxjs/toolkit';

import { Seo } from 'models/announce';

export interface Category {
    id: number;
    icon: string;
    code: string;
    alt_image: string;
    articles_count: number;
    seo: Seo;
}

const initialState: Category[] = [];

export const slice = createSlice({
    name: 'mainCategories',
    initialState,
    reducers: {},
});

export default slice.reducer;
