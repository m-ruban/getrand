import React, { FC } from 'react';

import Column from 'gg-ukit/components/Column';
import ColumnsWrapper from 'gg-ukit/components/ColumnsWrapper';

import Logo from 'components/Menu/Logo';
import MenuLinks from 'components/Menu/MenuLinks';
import MobileMenu from 'components/Menu/MobileMenu';

import 'components/Menu/menu.less';

const Menu: FC = () => {
    return (
        <div className="menu-wrapper">
            <ColumnsWrapper>
                <Column l={12} m={12} s={6} xs={4}>
                    <div className="menu">
                        <Logo />
                        <div className="menu-links">
                            <MenuLinks />
                            <MobileMenu />
                        </div>
                    </div>
                </Column>
            </ColumnsWrapper>
        </div>
    );
};

export default Menu;
