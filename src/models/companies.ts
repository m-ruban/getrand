import { createSlice } from '@reduxjs/toolkit';

import { Company } from 'models/lastCompanies';

const initialState: Company[] = [];

export const slice = createSlice({
    name: 'companies',
    initialState,
    reducers: {},
});

export default slice.reducer;
