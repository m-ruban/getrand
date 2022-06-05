import { createSlice } from '@reduxjs/toolkit';

import { Seo } from 'models/announce';

export interface Company {
    id: number;
    main_img: string;
    created: string;
    hasText: boolean;
    seo: Seo;
}

const initialState: Company[] = [];

export const slice = createSlice({
    name: 'lastCompanies',
    initialState,
    reducers: {},
});

export default slice.reducer;
