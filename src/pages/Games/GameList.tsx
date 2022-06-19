import React, { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';

import { H2 } from 'gg-ukit/components/Header';
import { HeaderLine } from 'gg-ukit/components/Header/BasicHeader';

import { RootStore } from 'models/reducers';

import ArticleDivider from 'components/ArticleDivider';
import ColumnContainer from 'components/ColumnContainer';
import Game from 'components/Game';

const GameList: FC = () => {
    const games = useSelector((state: RootStore) => state.games);
    return (
        <>
            <H2 title="Игры и материалы" line={HeaderLine.TertiaryDimmed} combineColor />
            <ColumnContainer>
                {games.map(({ id, ...props }, index) => {
                    return (
                        <Fragment key={id}>
                            <Game id={id} {...props} />
                            {index !== games.length - 1 && <ArticleDivider />}
                        </Fragment>
                    );
                })}
            </ColumnContainer>
        </>
    );
};

export default GameList;
