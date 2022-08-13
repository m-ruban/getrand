import React, { FC } from 'react';

import Column from 'gg-ukit/components/Column';
import ColumnsWrapper from 'gg-ukit/components/ColumnsWrapper';

import BreadcrumbList from 'components/BreadcrumbList';
import Description from 'components/Description';
import Footer from 'components/Footer';
import Header from 'components/Header';
import PageLayout from 'components/PageLayout';
import Sidebar from 'components/Sidebar';
import StickyContainer from 'components/StickyContainer';

import SearchContent from 'pages/Search/SearchContent';
import SearchPagination from 'pages/Search/SearchPagination';

const Search: FC = () => {
    return (
        <PageLayout>
            <Header />
            <BreadcrumbList />
            <ColumnsWrapper>
                <StickyContainer>
                    <Column l={8} m={8} s={6} xs={4}>
                        <SearchContent />
                        <SearchPagination />
                        <Description />
                    </Column>
                    <Column l={4} m={4} s={6} xs={4}>
                        <Sidebar />
                    </Column>
                </StickyContainer>
            </ColumnsWrapper>
            <Footer />
        </PageLayout>
    );
};

export default Search;
