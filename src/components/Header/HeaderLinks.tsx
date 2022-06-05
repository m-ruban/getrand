import React, { FC } from 'react';
import classnames from 'classnames';

import Link, { LinkType } from 'gg-ukit/components/Link';

import { sectionLink } from 'modules/links';

import links from 'components/Header/links';

import 'components/Header/headerLinks.less';

const HeaderLinks: FC = () => {
    return (
        <div className="header-menu-links">
            {links.map(({ href, title }) => {
                return (
                    <div
                        key={href}
                        className={classnames(
                            'header-menu-links-link',
                            { 'header-menu-links-link__categories': href === 'categories/' },
                            { 'header-menu-links-link__companies': href === 'companies/' }
                        )}
                    >
                        <Link type={LinkType.Secondary} href={sectionLink(href)}>
                            {title}
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default HeaderLinks;
