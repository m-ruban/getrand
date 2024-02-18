import React, { FC } from 'react';

import Calendar from 'gg-ukit/components/Icon/Calendar';
import Commandline from 'gg-ukit/components/Icon/Commandline';
import Desktop from 'gg-ukit/components/Icon/Desktop';
import DocumentTextAlt from 'gg-ukit/components/Icon/DocumentTextAlt';
import { ImageLoad } from 'gg-ukit/components/Image';
import Colors from 'gg-ukit/modules/colors';

import { GameSearchItem as GameProps } from 'models/games';

import dateFormat from 'modules/date-format';
import { EMPTY_IMAGE, imgFullSrc } from 'modules/links';

import 'components/GameSearchItem/gameSearchItem.less';

interface GameSearchItemProps extends GameProps {
    loading?: ImageLoad;
}

export const GameSearchItemAdapter: FC<{ game: GameProps }> = ({ game }) => <GameSearchItem {...game} />;

const GameSearchItem: FC<GameSearchItemProps> = ({
    preview_main_img,
    release_date_iso,
    seo: { name, keyword },
    developer,
    publisher,
    loading = ImageLoad.Eager,
}) => {
    return (
        <div className="game-search-item">
            <div className="game-search-item-logo">
                <div className="game-search-item-image-wrapper">
                    <img
                        className="game-search-item-image"
                        src={preview_main_img ? imgFullSrc(keyword, preview_main_img) : EMPTY_IMAGE}
                        alt={name}
                        loading={loading}
                    />
                </div>
            </div>
            <div className="game-search-item-info">
                <table className="game-search-item-info-table">
                    <tr>
                        <td>
                            <div className="game-search-item-info-title">Название:</div>
                            <div className="game-search-item-info-icon">
                                <DocumentTextAlt color={Colors.Secondary} />
                            </div>
                        </td>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="game-search-item-info-title">Разработчик:</div>
                            <div className="game-search-item-info-icon">
                                <Commandline color={Colors.Secondary} />
                            </div>
                        </td>
                        <td>{developer?.seo?.name || ''}</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="game-search-item-info-title">Издатель:</div>
                            <div className="game-search-item-info-icon">
                                <Desktop color={Colors.Secondary} />
                            </div>
                        </td>
                        <td>{publisher?.seo?.name || ''}</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="game-search-item-info-title">Релиз:</div>
                            <div className="game-search-item-info-icon">
                                <Calendar color={Colors.Secondary} />
                            </div>
                        </td>
                        <td>{dateFormat(new Date(release_date_iso))}</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default GameSearchItem;
