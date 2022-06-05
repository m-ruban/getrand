import React, { FC, ReactNode } from 'react';

import 'components/ColumnContainer/columnContainer.less';

interface ColumnContainerProps {
    children: ReactNode;
}

const ColumnContainer: FC<ColumnContainerProps> = ({ children }) => {
    return <div className="column-container">{children}</div>;
};

export default ColumnContainer;
