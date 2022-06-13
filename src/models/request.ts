import { createSlice } from '@reduxjs/toolkit';

interface Request {
    url: string;
}

const initialState: Request = {
    url: '',
};

export const slice = createSlice({
    name: 'request',
    initialState,
    reducers: {},
});

export default slice.reducer;
