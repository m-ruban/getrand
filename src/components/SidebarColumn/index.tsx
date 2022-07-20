import React, { FC, ReactNode } from 'react';

import { H2 } from 'gg-ukit/components/Header';
import { HeaderLine } from 'gg-ukit/components/Header/BasicHeader';

import 'components/SidebarColumn/sidebarColumn.less';

interface SidebarColumnProps {
    title: string;
    children: ReactNode;
}

const SidebarColumn: FC<SidebarColumnProps> = ({ title, children }) => {
    return (
        <div className="sidebar-column">
            <div className="sidebar-column-header">
                <H2 title={title} line={HeaderLine.TertiaryDimmed} combineColor />
            </div>
            <div className="sidebar-column-content">{children}</div>
        </div>
    );
};

export default SidebarColumn;
