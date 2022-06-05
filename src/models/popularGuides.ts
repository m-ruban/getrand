import { createSlice } from '@reduxjs/toolkit';

import { ArticleSearch } from 'models/lastReviews';

const initialState: ArticleSearch[] = [];

export const slice = createSlice({
    name: 'popularGuides',
    initialState,
    reducers: {},
});

export default slice.reducer;
