import React, { FC } from 'react';

import Column from 'gg-ukit/components/Column';
import { H3 } from 'gg-ukit/components/Header';
import Link, { LinkType } from 'gg-ukit/components/Link';
import List from 'gg-ukit/components/List';
import Paragraph from 'gg-ukit/components/Paragraph';

import { Game as GameProps } from 'models/games';

import dateFormat from 'modules/date-format';
import { articleLink, EMPTY_IMAGE, imgFullSrc } from 'modules/links';

import CategoryBadges from 'components/CategoryBadges';
import ColumnContainer from 'components/ColumnContainer';

import 'components/Game/game.less';

const Game: FC<GameProps> = ({
    main_img,
    release_date_iso,
    seo: { name, descr, keyword },
    developer,
    publisher,
    categories,
    articles,
}) => {
    return (
        <Column l={8} m={8} s={6} xs={4}>
            <div className="game">
                <ColumnContainer>
                    <Column l={3} m={3} s={2} xs={4}>
                        <div className="game-image-wrapper">
                            <img
                                className="game-image"
                                src={main_img ? imgFullSrc(keyword, main_img) : EMPTY_IMAGE}
                                alt={name}
                            />
                        </div>
                    </Column>
                    <Column l={5} m={5} s={4} xs={4}>
                        <div className="game-info">
                            <table className="game-info-table">
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
            <div className="game-categories">
                <CategoryBadges categories={categories} />
            </div>
            <div>
                <Paragraph>{descr}</Paragraph>
            </div>
            <div className="game-articles">
                <H3 title="Материалы" />
                <List>
                    {articles.map(({ seo: { name, keyword }, id, article_type_keyword }) => {
                        return (
                            <li key={id} className="game-article-link">
                                <Link type={LinkType.Secondary} href={articleLink(article_type_keyword, keyword)}>
                                    {name}
                                </Link>
                            </li>
                        );
                    })}
                </List>
            </div>
        </Column>
    );
};

export default Game;
