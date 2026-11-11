import React, { FC } from 'react';
import classnames from 'classnames';

import Link, { LinkType } from 'gg-ukit/components/Link';

import { sectionLink } from 'modules/links';

import links from 'components/Menu/links';

import { getTrl } from 'lang/trls';

import 'components/Menu/menuLinks.less';

const HeaderLinks: FC = () => {
    return (
        <div className="menu-links">
            {links.map(({ href, title }, index) => {
                return (
                    <div
                        key={href}
                        className={classnames('menu-links-link', {
                            'menu-links-link__last': index === links.length - 1,
                        })}
                    >
                        <Link type={LinkType.Secondary} href={sectionLink(href)}>
                            {getTrl(title)}
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default HeaderLinks;
