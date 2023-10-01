import React, { FC } from 'react';

import Column from 'gg-ukit/components/Column';
import ColumnsWrapper from 'gg-ukit/components/ColumnsWrapper';

import ArticleView from 'components/ArticleView';
import BreadcrumbList from 'components/BreadcrumbList';
import Footer from 'components/Footer';
import Header from 'components/Header';
import PageLayout from 'components/PageLayout';
import ScrollToTop from 'components/ScrollToTop';
import Sidebar from 'components/Sidebar';
import StickyContainer from 'components/StickyContainer';

const Article: FC = () => {
    return (
        <PageLayout>
            <Header />
            <BreadcrumbList />
            <ColumnsWrapper>
                <StickyContainer>
                    <Column l={8} m={8} s={6} xs={4}>
                        <ArticleView />
                    </Column>
                    <Column l={4} m={4} s={6} xs={4}>
                        <Sidebar />
                    </Column>
                </StickyContainer>
            </ColumnsWrapper>
            <ScrollToTop />
            <Footer />
        </PageLayout>
    );
};

export default Article;
