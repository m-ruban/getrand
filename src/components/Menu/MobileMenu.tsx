import React, { FC, useState } from 'react';
import classnames from 'classnames';

import DeclineAlt from 'gg-ukit/components/Icon/DeclineAlt';
import MenuDotAlt from 'gg-ukit/components/Icon/MenuDotAlt';
import Link, { LinkType } from 'gg-ukit/components/Link';
import Colors from 'gg-ukit/modules/colors';

import { sectionLink } from 'modules/links';

import links from 'components/Menu/links';

import 'components/Menu/mobileMenu.less';

const MobileMenu: FC = () => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <div className="mobile-menu">
            <div
                className="mobile-menu-icon"
                onClick={() => {
                    setShow(!show);
                }}
            >
                {!show && <MenuDotAlt scale={2} color={Colors.Secondary} />}
                {show && <DeclineAlt scale={2} color={Colors.Secondary} />}
            </div>
            <div className={classnames('mobile-menu-links', { 'mobile-menu-links_show': show })}>
                {links.map(({ href, title }) => {
                    return (
                        <div key={href} className="mobile-menu-links-link">
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

export default MobileMenu;
