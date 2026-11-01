import React, { FC } from 'react';
import StickyBox from 'react-sticky-box';

import Column from 'gg-ukit/components/Column';
import ColumnsWrapper from 'gg-ukit/components/ColumnsWrapper';

import Footer from 'components/Footer';
import Header from 'components/Header';
import PageLayout from 'components/PageLayout';
import SidebarColumn from 'components/SidebarColumn';
import StickyContainer from 'components/StickyContainer';

import Announce from 'pages/Main/Announce';
import Categories from 'pages/Main/Categories';
import LastCompanies from 'pages/Main/LastCompanies';
import LastGuides from 'pages/Main/LastGuides';
import LastReviews from 'pages/Main/LastReviews';
import PopularGuides from 'pages/Main/PopularGuides';
import PopularReviews from 'pages/Main/PopularReviews';
import VSpacing from 'pages/Main/VSpacing';

import { getTrl } from 'lang/trls';

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
                <StickyContainer>
                    <Column l={8} m={8} s={6} xs={4}>
                        <LastReviews />
                        <LastGuides />
                        <LastCompanies />
                    </Column>
                    <Column l={4} m={4} s={6} xs={4}>
                        <StickyBox>
                            <SidebarColumn title={getTrl('topReviews')}>
                                <PopularReviews />
                            </SidebarColumn>
                            <SidebarColumn title={getTrl('topGuides')}>
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

export default Main;
