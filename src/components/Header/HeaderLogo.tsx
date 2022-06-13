import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootStore } from 'models/reducers';

import { host, sectionLink } from 'modules/links';

import 'components/Header/headerLogo.less';

const HeaderLogo: FC = () => {
    const pathname = useSelector((state: RootStore) => state.router.location.pathname);
    const logo = <img className="header-menu-logo" src={`${host}/img/logo/golem.png`} alt="GameSpirit.org logo" />;
    return (
        <div className="header-menu-logo-wrapper">
            <div>
                {pathname === '/' && logo}
                {pathname !== '/' && (
                    <a href={sectionLink('')}>
                        <img
                            className="header-menu-logo"
                            src="http://gamespirit.org/img/logo/golem.png"
                            alt="GameSpirit.org logo"
                        />
                    </a>
                )}
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
