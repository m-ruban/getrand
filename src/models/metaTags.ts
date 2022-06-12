import { createSlice } from '@reduxjs/toolkit';

import { Category } from 'models/mainCategories';

export interface MetaTags {
    title: string;
    description: string;
    keywords: string;
    seo_descr: string;
}

const initialState: MetaTags = {
    title: '',
    description: '',
    keywords: '',
    seo_descr: '',
};

export const slice = createSlice({
    name: 'metaTags',
    initialState,
    reducers: {},
});

export default slice.reducer;
