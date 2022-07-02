import React, { FC } from 'react';

import Column from 'gg-ukit/components/Column';

import { GameSearchItem as GameSearchItemProps } from 'models/games';

import dateFormat from 'modules/date-format';
import { EMPTY_IMAGE, imgFullSrc } from 'modules/links';

import ColumnContainer from 'components/ColumnContainer';

import 'components/GameSearchItem/gameSearchItem.less';

export const GameSearchItemAdapter: FC<{ game: GameSearchItemProps }> = ({ game }) => <GameSearchItem {...game} />;

const GameSearchItem: FC<GameSearchItemProps> = ({
    main_img,
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
                            src={main_img ? imgFullSrc(keyword, main_img) : EMPTY_IMAGE}
                            alt={name}
                        />
                    </div>
                </Column>
                <Column l={5} m={5} s={4} xs={4}>
                    <div className="game-search-item-image-info">
                        <table className="game-search-item-info-table">
                            <tr>
                                <td>Название:</td>
                                <td>{name}</td>
                            </tr>
                            <tr>
                                <td>Разработчик:</td>
                                <td>{developer.seo.name}</td>
                            </tr>
                            <tr>
                                <td>Издатель:</td>
                                <td>{publisher.seo.name}</td>
                            </tr>
                            <tr>
                                <td>Релиз:</td>
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
