import React, { FC } from 'react';

import 'components/Header/headerLogo.less';

const HeaderLogo: FC = () => {
    return (
        <div className="header-menu-logo-wrapper">
            <div>
                <img
                    className="header-menu-logo"
                    src="http://gamespirit.org/img/logo/golem.png"
                    alt="GameSpirit.org logo"
                />
            </div>
            <div className="header-menu-name-wrapper">
                <div className="header-menu-name">
                    <span className="header-menu-name__spec-symbol">G</span>ame
                    <span className="header-menu-name__spec-symbol">S</span>pirit.org
                </div>
                <div className="header-menu-slogan">We&apos;ve heard you like games</div>
            </div>
        </div>
    );
};

export default HeaderLogo;
