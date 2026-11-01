import React, { FC } from 'react';

import { sectionLink } from 'modules/links';
import { host } from 'modules/links';

import { getTrl } from 'lang/trls';

import 'components/Menu/logo.less';

const HeaderLogo: FC = () => {
    return (
        <div className="menu-logo-wrapper">
            <div>
                <a href={sectionLink('')}>
                    <img src={`${host}/img/logo/golem.png`} alt={getTrl('siteLogo')} width="105" height="90" />
                </a>
            </div>
            <div className="menu-name-wrapper">
                <div className="menu-name">
                    <span className="menu-name__spec-symbol">G</span>ame
                    <span className="menu-name__spec-symbol">S</span>pirit.org
                </div>
                <div className="menu-slogan">{getTrl('siteSlogan')}</div>
            </div>
        </div>
    );
};

export default HeaderLogo;
