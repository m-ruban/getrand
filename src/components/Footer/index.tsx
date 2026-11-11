import React, { FC } from 'react';

import Column from 'gg-ukit/components/Column';
import ColumnsWrapper from 'gg-ukit/components/ColumnsWrapper';
import { H2 } from 'gg-ukit/components/Header';
import Link from 'gg-ukit/components/Link';

import { sectionLink } from 'modules/links';

import ColumnContainer from 'components/ColumnContainer';

import { getTrl } from 'lang/trls';

import 'components/Footer/footer.less';

const Footer: FC = () => {
    return (
        <>
            <footer className="footer-wrapper">
                <ColumnsWrapper>
                    <Column l={12} m={12} s={6} xs={4}>
                        <ColumnContainer>
                            <Column l={3} m={3} s={3} xs={4}>
                                <H2 title={getTrl('aboutUs')} />
                                <div className="footer-about">
                                    <div className="footer-about-content">{getTrl('footerAbout')}</div>
                                    <Link href={sectionLink('about/')}>{getTrl('readMore')}</Link>
                                </div>
                            </Column>
                            <Column l={3} m={3} s={3} xs={4}>
                                <H2 title={getTrl('footerSections')} />
                                <div className="footer-links">
                                    <div className="footer-link">
                                        <Link href={sectionLink('recommended/')}>{getTrl('recommended')}</Link>
                                    </div>
                                    <div className="footer-link">
                                        <Link href={sectionLink('games/')}>{getTrl('games')}</Link>
                                    </div>
                                    <div className="footer-link">
                                        <Link href={sectionLink('companies/')}>{getTrl('companies')}</Link>
                                    </div>
                                    <div className="footer-link">
                                        <Link href={sectionLink('faq/')}>FAQ</Link>
                                    </div>
                                </div>
                            </Column>
                            <Column l={3} m={3} s={3} xs={4}>
                                <H2 title={getTrl('footerLinks')} />
                                <div className="footer-links">
                                    <div className="footer-link">
                                        <Link href="https://zen.yandex.ru/godlike_goblin">{getTrl('zen')}</Link>
                                    </div>
                                    <div className="footer-link">
                                        <Link href="https://boosty.to/gamespirit.org">Boosty</Link>
                                    </div>
                                    <div className="footer-link">
                                        <Link href="https://steamcommunity.com/groups/gamespirit-org">Steam</Link>
                                    </div>
                                </div>
                            </Column>
                            <Column l={3} m={3} s={3} xs={4}>
                                <H2 title={getTrl('footerContact')} />
                                <div className="footer-contacts">
                                    <Link href="mailto:gamespirit.org@gmail.com">gamespirit.org@gmail.com</Link>
                                </div>
                            </Column>
                        </ColumnContainer>
                    </Column>
                </ColumnsWrapper>
            </footer>
            <div className="footer-copyright">
                <ColumnsWrapper>
                    <Column l={12} m={12} s={6} xs={4}>
                        {getTrl('footerCopyright')}
                    </Column>
                </ColumnsWrapper>
            </div>
        </>
    );
};

export default Footer;
