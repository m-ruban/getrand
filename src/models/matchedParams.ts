import { createSlice } from '@reduxjs/toolkit';

const initialState: Record<string, unknown> = {};

export const slice = createSlice({
    name: 'matchedParams',
    initialState,
    reducers: {},
});

export default slice.reducer;
