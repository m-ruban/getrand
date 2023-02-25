import React, { FC, useState } from 'react';
import classnames from 'classnames';

import Column from 'gg-ukit/components/Column';
import ColumnsWrapper from 'gg-ukit/components/ColumnsWrapper';

import SearchForm from 'components/SearchForm';
import SearchInput from 'components/SearchInput';

import 'components/TopLine/topLine.less';

const TopLine: FC = () => {
    const [showSearch, setShowSearch] = useState<boolean>(false);
    return (
        <ColumnsWrapper>
            <Column l={12} m={12} s={6} xs={4}>
                <div className="top-line-wrapper">
                    <div className="top-line-site">
                        <span className="top-line-site__spec-symbol">G</span>
                        <span className="top-line-site__other-symbols">ame</span>
                        <span className="top-line-site__spec-symbol">S</span>
                        <span className="top-line-site__other-symbols">pirit</span>
                        .org
                    </div>
                    <div className="top-line-icons">
                        <a
                            href="https://steamcommunity.com/groups/gamespirit-org"
                            aria-label="Группа в Steam"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="top-line-icon top-line-icon_steam" />
                        </a>
                        <a
                            href="https://zen.yandex.ru/godlike_goblin"
                            aria-label="Группа в Яндекс.Дзен"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="top-line-icon top-line-icon_zen" />
                        </a>
                        <a
                            href="https://www.patreon.com/gamespirit"
                            aria-label="Страница в Patreon"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="top-line-icon top-line-icon_patreon" />
                        </a>
                        <div
                            className="top-line-icon top-line-icon_search"
                            onClick={() => {
                                setShowSearch(!showSearch);
                            }}
                        />
                    </div>
                    <div className="top-line-search top-line-search_desktop">
                        <SearchForm>
                            <SearchInput />
                        </SearchForm>
                    </div>
                </div>
                <div
                    className={classnames('top-line-search', 'top-line-search_mobile', {
                        'top-line-search_mobile-hide': !showSearch,
                    })}
                >
                    <SearchForm>
                        <SearchInput />
                    </SearchForm>
                </div>
            </Column>
        </ColumnsWrapper>
    );
};

export default TopLine;
