import React, { FC, ReactNode } from 'react';

interface SearchFormProps {
    children: ReactNode;
}

const SearchForm: FC<SearchFormProps> = ({ children }) => {
    return (
        <form action="/search/" method="get">
            {children}
        </form>
    );
};

export default SearchForm;
