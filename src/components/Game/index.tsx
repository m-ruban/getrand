import React, { FC } from 'react';

import Column from 'gg-ukit/components/Column';
import { H3 } from 'gg-ukit/components/Header';
import Link, { LinkType } from 'gg-ukit/components/Link';
import List from 'gg-ukit/components/List';
import Paragraph from 'gg-ukit/components/Paragraph';

import { Game as GameModelProps } from 'models/games';

import { articleLink } from 'modules/links';

import CategoryBadges from 'components/CategoryBadges';
import GameSearchItem from 'components/GameSearchItem';

import 'components/Game/game.less';

interface GameProps extends GameModelProps {
    loading?: 'eager' | 'lazy';
}

const Game: FC<GameProps> = ({ categories, articles, loading, ...gameProps }) => {
    return (
        <Column l={8} m={8} s={6} xs={4}>
            <GameSearchItem {...gameProps} loading={loading} />
            <div className="game-categories">
                <CategoryBadges categories={categories} />
            </div>
            <div>
                <Paragraph>{gameProps.seo.descr}</Paragraph>
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
