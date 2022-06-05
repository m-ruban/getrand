import React, { FC, ReactNode } from 'react';

interface PageLayoutProps {
    children: ReactNode;
}

import 'components/PageLayout/pageLayout.less';

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
    return (
        <div className="page-layout">
            <div className="page-layout__top" />
            {children}
            <div className="page-layout__bottom" />
        </div>
    );
};

export default PageLayout;
