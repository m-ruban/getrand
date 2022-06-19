import React, { FC } from 'react';

import Column from 'gg-ukit/components/Column';
import ColumnsWrapper from 'gg-ukit/components/ColumnsWrapper';

import BreadcrumbList from 'components/BreadcrumbList';
import Footer from 'components/Footer';
import Header from 'components/Header';
import PageLayout from 'components/PageLayout';

import FAQList from 'pages/FAQ/FAQList';

const FAQ: FC = () => {
    return (
        <PageLayout>
            <Header />
            <BreadcrumbList />
            <ColumnsWrapper>
                <Column l={12} m={12} s={6} xs={4}>
                    <FAQList />
                </Column>
            </ColumnsWrapper>
            <Footer />
        </PageLayout>
    );
};

export default FAQ;
