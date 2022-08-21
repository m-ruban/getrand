import React, { FC } from 'react';

import Column from 'gg-ukit/components/Column';
import ColumnsWrapper from 'gg-ukit/components/ColumnsWrapper';

import 'components/Header/headerTopLine.less';

const HeaderTopLine: FC = () => {
    return (
        <ColumnsWrapper>
            <Column l={12} m={12} s={6} xs={4}>
                <div className="header-top-line-wrapper">
                    <div className="header-top-line-site">
                        <span className="header-top-line-site__spec-symbol">G</span>ame
                        <span className="header-top-line-site__spec-symbol">S</span>pirit.org
                    </div>
                    <div className="header-top-line-icons">
                        <a
                            href="https://steamcommunity.com/groups/gamespirit-org"
                            aria-label="Группа в Steam"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="header-icon header-icon_steam" />
                        </a>
                        <a
                            href="https://zen.yandex.ru/godlike_goblin"
                            aria-label="Группа в Яндекс.Дзен"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="header-icon header-icon_zen" />
                        </a>
                        <a
                            href="https://www.patreon.com/gamespirit"
                            aria-label="Страница в Patreon"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="header-icon header-icon_patreon" />
                        </a>
                    </div>
                </div>
            </Column>
        </ColumnsWrapper>
    );
};

export default HeaderTopLine;
