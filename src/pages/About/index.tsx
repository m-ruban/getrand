import React, { FC } from 'react';

import Column from 'gg-ukit/components/Column';
import ColumnsWrapper from 'gg-ukit/components/ColumnsWrapper';
import { H2 } from 'gg-ukit/components/Header';
import { HeaderLine } from 'gg-ukit/components/Header/BasicHeader';
import Link from 'gg-ukit/components/Link';
import Paragraph from 'gg-ukit/components/Paragraph';

import ArticleDivider from 'components/ArticleDivider';
import BreadcrumbList from 'components/BreadcrumbList';
import ColumnContainer from 'components/ColumnContainer';
import Footer from 'components/Footer';
import Header from 'components/Header';
import PageLayout from 'components/PageLayout';

import 'pages/About/about.less';

const About: FC = () => {
    return (
        <PageLayout>
            <Header />
            <BreadcrumbList />
            <ColumnsWrapper>
                <Column l={12} m={12} s={6} xs={4}>
                    <H2 title="Команда проекта" line={HeaderLine.TertiaryDimmed} combineColor />
                    <ColumnContainer>
                        <div className="human">
                            <Column l={3} m={3} s={2} xs={4}>
                                <div className="human-logo-wrapper">
                                    <img
                                        className="human-logo"
                                        src="http://gamespirit.org/image/icon/rb.png"
                                        alt="rb032960"
                                    />
                                </div>
                            </Column>
                            <Column l={9} m={9} s={4} xs={4}>
                                <Paragraph>Михаил</Paragraph>
                                <Paragraph>Делаю дизайн, разрабатываю, иногда пишу</Paragraph>
                                <Paragraph>
                                    <Link href="http://gamespirit.org/users/DolanDuck/">Материалы</Link>
                                </Paragraph>
                            </Column>
                        </div>
                        <ArticleDivider />
                        <div className="human">
                            <Column l={3} m={3} s={2} xs={4}>
                                <div className="human-logo-wrapper">
                                    <img
                                        className="human-logo"
                                        src="http://gamespirit.org/image/icon/gg.png"
                                        alt="godlike_goblin"
                                    />
                                </div>
                            </Column>
                            <Column l={9} m={9} s={4} xs={4}>
                                <Paragraph>Михаил</Paragraph>
                                <Paragraph>В основном, пишу игровые материалы</Paragraph>
                                <Paragraph>
                                    <Link href="http://gamespirit.org/users/folstaad/">Материалы</Link>
                                </Paragraph>
                            </Column>
                        </div>
                    </ColumnContainer>
                    <Paragraph>
                        * в команду проекта берем только людей с именем &quot;Михаил&quot;, но можем сделать исключение
                    </Paragraph>
                </Column>
            </ColumnsWrapper>
            <Footer />
        </PageLayout>
    );
};

export default About;
