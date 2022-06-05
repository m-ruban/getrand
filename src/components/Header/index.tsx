import React, { FC } from 'react';

import HeaderIcons from 'components/Header/HeaderIcons';
import HeaderMenu from 'components/Header/HeaderMenu';

const Header: FC = () => {
    return (
        <div>
            <HeaderIcons />
            <HeaderMenu />
        </div>
    );
};

export default Header;
