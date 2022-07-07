import React, { FC, ReactNode } from 'react';

import 'components/Table/table.less';

const Table: FC<{ children: ReactNode }> = ({ children }) => {
    return <table className="article-table">{children}</table>;
};

export default Table;
