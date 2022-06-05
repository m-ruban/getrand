import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { H2 } from 'gg-ukit/components/Header';
import { HeaderLine } from 'gg-ukit/components/Header/BasicHeader';

import { RootStore } from 'models/reducers';

import ArticleSearchItem from 'components/ArticleSearchItem';
import ColumnContainer from 'components/ColumnContainer';

const LastReviews: FC = () => {
    const lastReviews = useSelector((state: RootStore) => state.lastReviews);
    return (
        <>
            <H2 title="Последние обзоры" line={HeaderLine.TertiaryDimmed} combineColor />
            <ColumnContainer>
                {lastReviews.map(({ id, ...props }) => {
                    return <ArticleSearchItem key={id} type="review" id={id} {...props} />;
                })}
            </ColumnContainer>
        </>
    );
};

export default LastReviews;
