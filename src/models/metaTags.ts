import { createSlice } from '@reduxjs/toolkit';

export interface MetaTags {
    title: string;
    description: string;
    keywords: string;
    seo_descr: string;
    shortTitle: string;
    canonical: string;
}

const initialState: MetaTags = {
    title: '',
    description: '',
    keywords: '',
    seo_descr: '',
    shortTitle: '',
    canonical: '',
};

export const slice = createSlice({
    name: 'metaTags',
    initialState,
    reducers: {},
});

export default slice.reducer;
