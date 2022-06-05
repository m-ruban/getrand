import React, { FC, useState } from 'react';
import classnames from 'classnames';

import DeclineAlt from 'gg-ukit/components/Icon/DeclineAlt';
import Link, { LinkType } from 'gg-ukit/components/Link';
import Colors from 'gg-ukit/modules/colors';

import { sectionLink } from 'modules/links';

import links from 'components/Header/links';

import 'components/Header/headerMobileMenu.less';

const HeaderMobileMenu: FC = () => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <div className="header-mobile-menu">
            <div
                className="header-mobile-menu-icon"
                onClick={() => {
                    setShow(!show);
                }}
            >
                {!show && <div className="header-mobile-menu-burger" />}
                {show && <DeclineAlt scale={2} color={Colors.Secondary} />}
            </div>
            <div className={classnames('header-mobile-menu-links', { 'header-mobile-menu-links_show': show })}>
                {links.map(({ href, title }) => {
                    return (
                        <div key={href} className="header-mobile-menu-links-link">
                            <Link type={LinkType.Secondary} href={sectionLink(href)}>
                                {title}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HeaderMobileMenu;
