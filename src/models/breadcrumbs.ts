import { createSlice } from '@reduxjs/toolkit';

interface Breadcrumb {
    link: string;
    name: string;
}

const initialState: Breadcrumb[] = [];

export const slice = createSlice({
    name: 'breadcrumbs',
    initialState,
    reducers: {},
});

export default slice.reducer;
