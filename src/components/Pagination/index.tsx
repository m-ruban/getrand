import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import Pager from 'gg-ukit/components/Pager';

import { RootStore } from 'models/reducers';

import 'components/Pagination/pagination.less';

const Pagination: FC = () => {
    const url = useSelector((state: RootStore) => state.request.url);
    const pagination = useSelector((state: RootStore) => state.pagination);
    return (
        <div className="pagination-wrapper">
            <Pager {...pagination} pathname={`${url}/${pagination.pathname}/`} search="" />
        </div>
    );
};

export default Pagination;
