import { createSlice } from '@reduxjs/toolkit';

export interface Seo {
    id: number;
    name: string;
    keyword: string;
    descr: string;
}

export interface Article {
    id: number;
    parent_id: number;
    main_img: string;
    created_at: string;
    public: number;
    approved: number;
    views: number;
    age_limit: number;
    article_type_keyword: string;
    seo: Seo;
}

export interface Announce {
    id: number;
    approved_gr: number;
    count_category: number;
    short_name: string;
    short_descr: string;
    basic_image: string;
    left_image: string;
    right_image: string;
    type: string;
    ancor: string;
    article: Article;
}

const initialState: Announce = {
    id: 0,
    approved_gr: 0,
    count_category: 0,
    short_name: '2',
    short_descr: '',
    basic_image: '',
    left_image: '',
    right_image: '',
    type: '',
    ancor: '',
    article: {
        id: 0,
        parent_id: 0,
        main_img: '',
        created_at: '',
        public: 0,
        approved: 0,
        views: 0,
        age_limit: 0,
        article_type_keyword: '',
        seo: {
            id: 0,
            name: '',
            keyword: '',
            descr: '',
        },
    },
};

export const slice = createSlice({
    name: 'announce',
    initialState,
    reducers: {},
});

export default slice.reducer;
