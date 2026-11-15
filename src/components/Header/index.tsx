import React, { FC } from 'react';

import Menu from 'components/Menu';
import TopLine from 'components/TopLine';

const Header: FC = () => {
    return (
        <header>
            <TopLine />
            <Menu />
        </header>
    );
};

export default Header;
