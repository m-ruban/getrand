import React, { FC } from 'react';
import StickyBox from 'react-sticky-box';

import SidebarCategories from 'components/SidebarCategories';
import SidebarColumn from 'components/SidebarColumn';

import PopularGuides from 'pages/Main/PopularGuides';
import PopularReviews from 'pages/Main/PopularReviews';

const Sidebar: FC = () => {
    return (
        <StickyBox>
            <SidebarColumn title="Категории">
                <SidebarCategories />
            </SidebarColumn>
            <SidebarColumn title="Топ обзоров">
                <PopularReviews />
            </SidebarColumn>
            <SidebarColumn title="Топ гайдов">
                <PopularGuides />
            </SidebarColumn>
        </StickyBox>
    );
};

export default Sidebar;
