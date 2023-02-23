import React, { FC } from 'react';

import { sectionLink } from 'modules/links';
import { host } from 'modules/links';

import 'components/Menu/logo.less';

const HeaderLogo: FC = () => {
    return (
        <div className="menu-logo-wrapper">
            <div>
                <a href={sectionLink('')}>
                    <img src={`${host}/img/logo/golem.png`} alt="GameSpirit.org logo" width="105" height="90" />
                </a>
            </div>
            <div className="menu-name-wrapper">
                <div className="menu-name">
                    <span className="menu-name__spec-symbol">G</span>ame
                    <span className="menu-name__spec-symbol">S</span>pirit.org
                </div>
                <div className="menu-slogan">We&apos;ve heard you like games</div>
            </div>
        </div>
    );
};

export default HeaderLogo;
