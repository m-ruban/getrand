import React, { FC } from 'react';
import StickyBox from 'react-sticky-box';

import Column from 'gg-ukit/components/Column';
import ColumnsWrapper from 'gg-ukit/components/ColumnsWrapper';

import Footer from 'components/Footer';
import Header from 'components/Header';
import PageLayout from 'components/PageLayout';
import SidebarColumn from 'components/SidebarColumn';

import Announce from 'pages/Main/Announce';
import Categories from 'pages/Main/Categories';
import LastCompanies from 'pages/Main/LastCompanies';
import LastGuides from 'pages/Main/LastGuides';
import LastReviews from 'pages/Main/LastReviews';
import PopularGuides from 'pages/Main/PopularGuides';
import PopularReviews from 'pages/Main/PopularReviews';
import VSpacing from 'pages/Main/VSpacing';

import 'pages/Main/main.less';

const Main: FC = () => {
    return (
        <PageLayout>
            <Header />
            <VSpacing />
            <Announce />
            <VSpacing />
            <Categories />
            <VSpacing />
            <ColumnsWrapper>
                <div className="main-page">
                    <Column l={8} m={8} s={6} xs={4}>
                        <LastReviews />
                        <LastGuides />
                        <LastCompanies />
                    </Column>
                    <Column l={4} m={4} s={6} xs={4}>
                        <StickyBox>
                            <SidebarColumn title="Топ обзоров">
                                <PopularReviews />
                            </SidebarColumn>
                            <SidebarColumn title="Топ гайдов">
                                <PopularGuides />
                            </SidebarColumn>
                        </StickyBox>
                    </Column>
                </div>
            </ColumnsWrapper>
            <Footer />
        </PageLayout>
    );
};

export default Main;
