import { createSlice } from '@reduxjs/toolkit';

import { Article } from 'models/announce';
import { Category } from 'models/mainCategories';

export interface ArticleSearch extends Article {
    categories: Category[];
    is_old?: boolean;
}

const initialState: ArticleSearch[] = [];

export const slice = createSlice({
    name: 'lastReviews',
    initialState,
    reducers: {},
});

export default slice.reducer;
