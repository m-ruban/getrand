import React, { FC } from 'react';

import Column from 'gg-ukit/components/Column';
import ColumnsWrapper from 'gg-ukit/components/ColumnsWrapper';
import { H2 } from 'gg-ukit/components/Header';
import ArrowUpAlt2 from 'gg-ukit/components/Icon/ArrowUpAlt2';
import Link from 'gg-ukit/components/Link';
import Colors from 'gg-ukit/modules/colors';

import { sectionLink } from 'modules/links';

import ColumnContainer from 'components/ColumnContainer';

import 'components/Footer/footer.less';

const Footer: FC = () => {
    return (
        <>
            <footer className="footer-wrapper">
                <ColumnsWrapper>
                    <Column l={12} m={12} s={6} xs={4}>
                        <ColumnContainer>
                            <Column l={2} m={2} s={2} xs={4}>
                                <img
                                    className="footer-logo"
                                    src="http://gamespirit.org/img/logo/golem.png"
                                    alt="GameSpirit.org logo"
                                />
                            </Column>
                            <Column l={3} m={3} s={3} xs={4}>
                                <H2 title="О нас" />
                                <div className="footer-about">
                                    <div className="footer-about-content">
                                        Мы совсем небольшой коллектив единомышленников, который задался целью создания
                                        информационного портала о компьютерных играх.
                                    </div>
                                    <Link href={sectionLink('about/')}>Далее</Link>
                                </div>
                            </Column>
                            <Column l={2} m={2} s={1} xs={4}>
                                <H2 title="Ссылки" />
                                <div className="footer-links">
                                    <div className="footer-link">
                                        <Link href="https://steamcommunity.com/groups/gamespirit-org">Steam</Link>
                                    </div>
                                    <div className="footer-link">
                                        <Link href="https://zen.yandex.ru/godlike_goblin">Дзен</Link>
                                    </div>
                                    <div className="footer-link">
                                        <Link href="https://www.patreon.com/gamespirit">Patreon</Link>
                                    </div>
                                </div>
                            </Column>
                            <Column l={4} m={4} s={5} xs={4}>
                                <H2 title="Контакты" />
                                <div className="footer-contacts">
                                    <Link href="mailto:gamespirit.org@gmail.com">gamespirit.org@gmail.com</Link>
                                </div>
                            </Column>
                            <Column l={1} m={1} s={1} xs={4}>
                                <div
                                    className="footer-to-top"
                                    onClick={() => {
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                >
                                    <ArrowUpAlt2 scale={2} color={Colors.Primary} />
                                </div>
                            </Column>
                        </ColumnContainer>
                    </Column>
                </ColumnsWrapper>
            </footer>
            <div className="footer-copyright">
                <ColumnsWrapper>
                    <Column l={12} m={12} s={6} xs={4}>
                        Все размещенные на сайте материалы и логотипы являются собственностью их владельцев и охраняются
                        в соответствии с действующим законодательством. Все материалы предоставляются исключительно в
                        ознакомительных целях. При использовании информации с сайта обязательно указывайте активную и
                        индексируемую ссылку на сайт GameSpirit.org
                    </Column>
                </ColumnsWrapper>
            </div>
        </>
    );
};

export default Footer;
