import React, { FC, ReactNode } from 'react';

import 'components/StickyContainer/stickyContainer.less';

interface StickyContainerProps {
    children: ReactNode;
}

const StickyContainer: FC<StickyContainerProps> = ({ children }) => {
    return <div className="sticky-container">{children}</div>;
};

export default StickyContainer;
