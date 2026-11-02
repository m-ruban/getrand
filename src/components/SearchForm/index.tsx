import React, { FC, ReactNode } from 'react';
import { languagePath } from 'lang/language';

interface SearchFormProps {
    children: ReactNode;
}

const SearchForm: FC<SearchFormProps> = ({ children }) => {
    return (
        <form action={languagePath('/search/')} method="get">
            {children}
        </form>
    );
};

export default SearchForm;
