import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { H2 } from 'gg-ukit/components/Header';
import { HeaderLine } from 'gg-ukit/components/Header/BasicHeader';

import { RootStore } from 'models/reducers';

import ArticleSearchItem from 'components/ArticleSearchItem';
import ColumnContainer from 'components/ColumnContainer';

const ReviewList: FC = () => {
    const reviewList = useSelector((state: RootStore) => state.reviews);
    return (
        <>
            <H2 title="Обзоры игр" line={HeaderLine.TertiaryDimmed} combineColor />
            <ColumnContainer>
                {reviewList.map(({ id, ...props }) => {
                    return <ArticleSearchItem key={id} type="review" id={id} {...props} short />;
                })}
            </ColumnContainer>
        </>
    );
};

export default ReviewList;
