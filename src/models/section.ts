import { createSlice } from '@reduxjs/toolkit';

import { Seo } from 'models/announce';

export interface Section {
    id: number;
    seo: Seo;
}

const initialState: Section = {
    id: 0,
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
};

export const slice = createSlice({
    name: 'section',
    initialState,
    reducers: {},
});

export default slice.reducer;
