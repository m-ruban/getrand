import { createSlice } from '@reduxjs/toolkit';

// TO DO delete interface
interface Pagination {
    selected: number;
    prev: boolean;
    start: number[];
    middle: number[];
    end: number[];
    next: boolean;
    pathname: string;
    search: string;
}

const initialState: Pagination = {
    selected: 0,
    prev: false,
    next: false,
    pathname: '',
    search: '',
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
