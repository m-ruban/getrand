import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import Pager from 'gg-ukit/components/Pager';
import { PAGE_TEMPLATE } from 'gg-ukit/components/Pager';

import { RootStore } from 'models/reducers';

import 'components/Pagination/pagination.less';

interface PaginationProps {
    template?: string;
}

const Pagination: FC<PaginationProps> = ({ template = `/${PAGE_TEMPLATE}/` }) => {
    const url = useSelector((state: RootStore) => state.request.url);
    const { pathname, ...pagerProps } = useSelector((state: RootStore) => state.pagination);
    return (
        <div className="pagination-wrapper">
            <Pager {...pagerProps} urlTemplate={`${url}/${pathname}${template}`} />
        </div>
    );
};

export default Pagination;
