import { createSlice } from '@reduxjs/toolkit';

import { Seo } from 'models/announce';
import { Category } from 'models/mainCategories';

interface CategoryTreeElement {
    id: number;
    parent_id: number;
    nearest_parent_id: number;
    child_id: number;
    level: number;
    child: Category;
}

interface Classification {
    id: number;
    seo_id: number;
    public: number;
    children: CategoryTreeElement[];
    seo: Seo;
}

const initialState: Classification[] = [];

export const slice = createSlice({
    name: 'classifications',
    initialState,
    reducers: {},
});

export default slice.reducer;
