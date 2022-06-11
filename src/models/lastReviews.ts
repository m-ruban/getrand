import { createSlice } from '@reduxjs/toolkit';

import { Article } from 'models/announce';

export interface ArticleSearch extends Article {
    is_old?: boolean;
}

const initialState: ArticleSearch[] = [];

export const slice = createSlice({
    name: 'lastReviews',
    initialState,
    reducers: {},
});

export default slice.reducer;
