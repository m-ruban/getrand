import { createSlice } from '@reduxjs/toolkit';

export interface FAQ {
    question: string;
    answer: string;
}

const initialState: FAQ[] = [];

export const slice = createSlice({
    name: 'faq',
    initialState,
    reducers: {},
});

export default slice.reducer;
