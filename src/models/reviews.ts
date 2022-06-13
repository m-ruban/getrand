import { createSlice } from '@reduxjs/toolkit';

import { ArticleSearch } from 'models/lastReviews';

const initialState: ArticleSearch[] = [];

export const slice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {},
});

export default slice.reducer;
