import React, { FC } from 'react';

import Column from 'gg-ukit/components/Column';
import ColumnsWrapper from 'gg-ukit/components/ColumnsWrapper';

import HeaderLinks from 'components/Header/HeaderLinks';
import HeaderLogo from 'components/Header/HeaderLogo';
import HeaderMobileMenu from 'components/Header/HeaderMobileMenu';

import 'components/Header/headerMenu.less';

const HeaderMenu: FC = () => {
    return (
        <div className="header-menu-wrapper">
            <ColumnsWrapper>
                <Column l={12} m={12} s={6} xs={4}>
                    <div className="header-menu">
                        <HeaderLogo />
                        <div className="header-menu-links">
                            <HeaderLinks />
                            <HeaderMobileMenu />
                        </div>
                    </div>
                </Column>
            </ColumnsWrapper>
        </div>
    );
};

export default HeaderMenu;
