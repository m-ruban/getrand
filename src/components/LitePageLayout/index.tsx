import React, { FC, ReactNode } from 'react';

interface PageLayoutProps {
    children: ReactNode;
}

import './litePageLayout.less';

const LitePageLayout: FC<PageLayoutProps> = ({ children }) => {
    return <div className="lite-page-layout">{children}</div>;
};

export default LitePageLayout;
