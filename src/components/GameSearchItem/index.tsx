import React, { FC } from 'react';

import Column from 'gg-ukit/components/Column';
import Calendar from 'gg-ukit/components/Icon/Calendar';
import Commandline from 'gg-ukit/components/Icon/Commandline';
import Desktop from 'gg-ukit/components/Icon/Desktop';
import DocumentTextAlt from 'gg-ukit/components/Icon/DocumentTextAlt';
import Colors from 'gg-ukit/modules/colors';

import { GameSearchItem as GameSearchItemProps } from 'models/games';

import dateFormat from 'modules/date-format';
import { EMPTY_IMAGE, imgFullSrc } from 'modules/links';

import ColumnContainer from 'components/ColumnContainer';

import 'components/GameSearchItem/gameSearchItem.less';

export const GameSearchItemAdapter: FC<{ game: GameSearchItemProps }> = ({ game }) => <GameSearchItem {...game} />;

const GameSearchItem: FC<GameSearchItemProps> = ({
    preview_main_img,
    release_date_iso,
    seo: { name, keyword },
    developer,
    publisher,
}) => {
    return (
        <div className="game-search-item">
            <ColumnContainer>
                <Column l={3} m={3} s={2} xs={4}>
                    <div className="game-search-item-image-wrapper">
                        <img
                            className="game-search-item-image"
                            src={preview_main_img ? imgFullSrc(keyword, preview_main_img) : EMPTY_IMAGE}
                            alt={name}
                        />
                    </div>
                </Column>
                <Column l={5} m={5} s={4} xs={4}>
                    <div className="game-search-item-image-info">
                        <table className="game-search-item-info-table">
                            <tr>
                                <td>
                                    <div className="game-search-item-info-title">Название:</div>
                                    <div className="game-search-item-info-icon">
                                        <DocumentTextAlt scale={1} color={Colors.Secondary} />
                                    </div>
                                </td>
                                <td>{name}</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="game-search-item-info-title">Разработчик:</div>
                                    <div className="game-search-item-info-icon">
                                        <Commandline scale={1} color={Colors.Secondary} />
                                    </div>
                                </td>
                                <td>{developer.seo.name}</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="game-search-item-info-title">Издатель:</div>
                                    <div className="game-search-item-info-icon">
                                        <Desktop scale={1} color={Colors.Secondary} />
                                    </div>
                                </td>
                                <td>{publisher.seo.name}</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="game-search-item-info-title">Релиз:</div>
                                    <div className="game-search-item-info-icon">
                                        <Calendar scale={1} color={Colors.Secondary} />
                                    </div>
                                </td>
                                <td>{dateFormat(new Date(release_date_iso))}</td>
                            </tr>
                        </table>
                    </div>
                </Column>
            </ColumnContainer>
        </div>
    );
};

export default GameSearchItem;
