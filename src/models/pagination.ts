import { createSlice } from '@reduxjs/toolkit';

import { PagerProps } from 'gg-ukit/components/Pager';

interface Pagination extends PagerProps {
    pathname: string;
}

const initialState: Pagination = {
    selected: 0,
    prev: false,
    next: false,
    pathname: '',
    urlTemplate: '',
    middle: [],
    end: [],
    start: [],
};

export const slice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {},
});

export default slice.reducer;
