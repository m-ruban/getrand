import React, { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';

import { ImageLoad } from 'gg-ukit/components/Image';

import { RootStore } from 'models/reducers';

import ArticleDivider from 'components/ArticleDivider';
import ColumnContainer from 'components/ColumnContainer';
import Game from 'components/Game';
import SectionHeader from 'components/SectionHeader';

const GameList: FC = () => {
    const games = useSelector((state: RootStore) => state.games);
    return (
        <>
            <SectionHeader title="Игры и статьи" combineColor />
            <ColumnContainer>
                {games.map(({ id, ...props }, index) => {
                    return (
                        <Fragment key={id}>
                            <Game id={id} loading={index < 2 ? ImageLoad.Eager : ImageLoad.Lazy} {...props} />
                            {index !== games.length - 1 && <ArticleDivider />}
                        </Fragment>
                    );
                })}
            </ColumnContainer>
        </>
    );
};

export default GameList;
