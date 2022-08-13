import React, { FC } from 'react';
import StickyBox from 'react-sticky-box';

import { SearchType } from 'models/searchCriteria';

import SearchForm from 'components/SearchForm';
import SearchInput from 'components/SearchInput';
import SidebarCategories from 'components/SidebarCategories';
import SidebarColumn from 'components/SidebarColumn';

import PopularGuides from 'pages/Main/PopularGuides';
import PopularReviews from 'pages/Main/PopularReviews';

import 'components/Sidebar/sidebar.less';

interface SidebarProps {
    searchType?: SearchType;
    showSearchForm?: boolean;
}

const Sidebar: FC<SidebarProps> = ({ searchType, showSearchForm = false }) => {
    return (
        <StickyBox>
            {showSearchForm && (
                <SidebarColumn title="Поиск">
                    <div className="sidebar-search-form">
                        <SearchForm>
                            <SearchInput />
                            <input type="hidden" name="type" value={searchType} />
                        </SearchForm>
                    </div>
                </SidebarColumn>
            )}
            <SidebarColumn title="Категории статей">
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
