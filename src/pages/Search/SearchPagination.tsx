import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { PAGE_TEMPLATE } from 'gg-ukit/components/Pager';

import { RootStore } from 'models/reducers';

import Pagination from 'components/Pagination';

const SearchPagination: FC = () => {
    const { types, query } = useSelector((state: RootStore) => state.searchCriteria);
    const params = [`query=${query}`, ...types.map((type) => `type=${type}`)];
    return <Pagination template={`/?${params.join('&')}&page=${PAGE_TEMPLATE}`} />;
};

export default SearchPagination;
