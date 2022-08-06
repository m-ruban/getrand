import React, { FC, useEffect } from 'react';

import Column from 'gg-ukit/components/Column';
import ColumnsWrapper from 'gg-ukit/components/ColumnsWrapper';
import Link, { LinkType } from 'gg-ukit/components/Link';
import Paragraph from 'gg-ukit/components/Paragraph';

import { host } from 'modules/links';

import Footer from 'components/Footer';
import Header from 'components/Header';
import PageLayout from 'components/PageLayout';

import 'pages/NotFound/notFound.less';

const NotFound: FC = () => {
    useEffect(() => {
        document.title = 'Страница не найдена';
    }, []);
    return (
        <PageLayout>
            <Header />
            <ColumnsWrapper>
                <Column l={12} m={12} s={6} xs={4}>
                    <div className="not-found">
                        <div className="not-found-title">404</div>
                        <Paragraph>Похоже, вы выбрали неправильный путь или что-то пошло не так.</Paragraph>
                        <Paragraph>Не волнуйтесь, иногда случается.</Paragraph>
                        <Paragraph>
                            Вернитесь на{' '}
                            <Link type={LinkType.Secondary} href="/">
                                главную страницу
                            </Link>{' '}
                            и попробуйте еще раз.
                        </Paragraph>
                        <div>
                            <img className="not-found-img" src={`${host}/image/icon/not_found.jpeg`} alt="404" />
                        </div>
                    </div>
                </Column>
            </ColumnsWrapper>
            <Footer />
        </PageLayout>
    );
};

export default NotFound;
