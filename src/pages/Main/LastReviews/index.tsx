import React, { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';

import { H2 } from 'gg-ukit/components/Header';
import { HeaderLine } from 'gg-ukit/components/Header/BasicHeader';

import { RootStore } from 'models/reducers';

import ArticleDivider from 'components/ArticleDivider';
import ArticleSearchItem from 'components/ArticleSearchItem';
import ColumnContainer from 'components/ColumnContainer';

const LastReviews: FC = () => {
    const lastReviews = useSelector((state: RootStore) => state.lastReviews);
    return (
        <>
            <H2 title="Последние обзоры" line={HeaderLine.TertiaryDimmed} combineColor />
            <ColumnContainer>
                {lastReviews.map(({ id, ...props }, index) => {
                    return (
                        <Fragment key={id}>
                            <ArticleSearchItem type="review" id={id} {...props} loading="lazy" short />
                            {index !== lastReviews.length - 1 && <ArticleDivider xsOnly />}
                        </Fragment>
                    );
                })}
            </ColumnContainer>
        </>
    );
};

export default LastReviews;
