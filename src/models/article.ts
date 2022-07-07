import { createSlice } from '@reduxjs/toolkit';

import { Article as ArticleShort } from 'models/announce';
import { Game } from 'models/games';
import { Category } from 'models/mainCategories';

export interface Author {
    id: number;
    name: string;
}

export interface Article extends ArticleShort {
    is_old?: boolean;
    autor: Author;
    redactor: Author;
    games: Game[];
    categories: Category[];
    children: ArticleShort[];
    parent?: ArticleShort;
}

const initialState: Article = {
    id: 0,
    parent_id: 0,
    main_img: '',
    created_at: '',
    public: 0,
    approved: 0,
    views: 0,
    age_limit: 0,
    article_type_keyword: '',
    is_old: false,
    autor: {
        id: 0,
        name: '',
    },
    redactor: {
        id: 0,
        name: '',
    },
    seo: {
        id: 0,
        name: '',
        keyword: '',
        descr: '',
        full_text: '',
        render_tree: {
            component: '',
            props: {},
            render: '',
            children: [],
        },
    },
    games: [],
    categories: [],
    children: [],
};

export const slice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
});

export default slice.reducer;
