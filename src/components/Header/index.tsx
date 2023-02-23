import React, { FC } from 'react';

import Menu from 'components/Menu';
import TopLine from 'components/TopLine';

const Header: FC = () => {
    return (
        <div>
            <TopLine />
            <Menu />
        </div>
    );
};

export default Header;
