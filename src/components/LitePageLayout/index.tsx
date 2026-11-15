import React, { FC, ReactNode } from 'react';

interface PageLayoutProps {
    children: ReactNode;
}

import './litePageLayout.less';

const LitePageLayout: FC<PageLayoutProps> = ({ children }) => {
    return <main className="lite-page-layout">{children}</main>;
};

export default LitePageLayout;
