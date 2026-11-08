import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import Column from 'gg-ukit/components/Column';
import ColumnsWrapper from 'gg-ukit/components/ColumnsWrapper';

import { RootStore } from 'models/reducers';

import BreadcrumbList from 'components/BreadcrumbList';
import Footer from 'components/Footer';
import Header from 'components/Header';
import PageLayout from 'components/PageLayout';
import ScrollToTop from 'components/ScrollToTop';
import SectionHeader from 'components/SectionHeader';
import Sidebar from 'components/Sidebar';
import StickyContainer from 'components/StickyContainer';
import TreeElement from 'components/TreeElement';

const Recommended: FC = () => {
    const { name, render_tree } = useSelector((state: RootStore) => state.section.seo);

    return (
        <PageLayout>
            <Header />
            <BreadcrumbList />
            <ColumnsWrapper>
                <StickyContainer>
                    <Column l={8} m={8} s={6} xs={4}>
                        <SectionHeader title={name} combineColor />
                        <TreeElement treeElement={render_tree} />
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

export default Recommended;
