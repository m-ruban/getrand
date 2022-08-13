import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum SearchType {
    Reviews = 'reviews',
    WalkThrough = 'walkthrough',
}

interface SearchCriteria {
    types: SearchType[];
    query: string;
}

const initialState: SearchCriteria = {
    types: [],
    query: '',
};

export const slice = createSlice({
    name: 'searchCriteria',
    initialState,
    reducers: {
        setTypes: (state, { payload }: PayloadAction<SearchType>) => {
            const { types } = state;
            state.types = types.includes(payload) ? types.filter((type) => type !== payload) : [...types, payload];
        },
    },
});

export const { setTypes } = slice.actions;

export default slice.reducer;
