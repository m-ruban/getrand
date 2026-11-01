import React, { FC } from 'react';
import StickyBox from 'react-sticky-box';

import SidebarCategories from 'components/SidebarCategories';
import SidebarColumn from 'components/SidebarColumn';

import PopularGuides from 'pages/Main/PopularGuides';
import PopularReviews from 'pages/Main/PopularReviews';

import { getTrl } from 'lang/trls';

const Sidebar: FC = () => {
    return (
        <StickyBox>
            <SidebarColumn title={getTrl('articleCategories')}>
                <SidebarCategories />
            </SidebarColumn>
            <SidebarColumn title={getTrl('topReviews')}>
                <PopularReviews />
            </SidebarColumn>
            <SidebarColumn title={getTrl('topGuides')}>
                <PopularGuides />
            </SidebarColumn>
        </StickyBox>
    );
};

export default Sidebar;
