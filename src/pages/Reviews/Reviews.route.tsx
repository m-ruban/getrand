import React, { FC } from 'react';
import StickyBox from 'react-sticky-box';

import Column from 'gg-ukit/components/Column';
import ColumnsWrapper from 'gg-ukit/components/ColumnsWrapper';

import BreadcrumbList from 'components/BreadcrumbList';
import Footer from 'components/Footer';
import Header from 'components/Header';
import PageLayout from 'components/PageLayout';
import Pagination from 'components/Pagination';
import SidebarCategories from 'components/SidebarCategories';
import SidebarColumn from 'components/SidebarColumn';
import StickyContainer from 'components/StickyContainer';

import PopularGuides from 'pages/Main/PopularGuides';
import PopularReviews from 'pages/Main/PopularReviews';
import Description from 'pages/Reviews/Description';
import ReviewList from 'pages/Reviews/ReviewList';

const Reviews: FC = () => {
    return (
        <PageLayout>
            <Header />
            <BreadcrumbList />
            <ColumnsWrapper>
                <StickyContainer>
                    <Column l={8} m={8} s={6} xs={4}>
                        <ReviewList />
                        <Pagination />
                        <Description />
                    </Column>
                    <Column l={4} m={4} s={6} xs={4}>
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
                    </Column>
                </StickyContainer>
            </ColumnsWrapper>
            <Footer />
        </PageLayout>
    );
};

export default Reviews;
