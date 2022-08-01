import React, { FC } from 'react';

import HeaderMenu from 'components/Header/HeaderMenu';
import HeaderTopLine from 'components/Header/HeaderTopLine';

const Header: FC = () => {
    return (
        <div>
            <HeaderTopLine />
            <HeaderMenu />
        </div>
    );
};

export default Header;
