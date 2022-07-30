import React, { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';

import { H2 } from 'gg-ukit/components/Header';
import { HeaderLine } from 'gg-ukit/components/Header/BasicHeader';

import { RootStore } from 'models/reducers';

import ArticleDivider from 'components/ArticleDivider';
import ArticleSearchItem from 'components/ArticleSearchItem';
import ColumnContainer from 'components/ColumnContainer';

const ReviewList: FC = () => {
    const reviewList = useSelector((state: RootStore) => state.reviews);
    return (
        <>
            <H2 title="Обзоры игр" line={HeaderLine.TertiaryDimmed} combineColor />
            <ColumnContainer>
                {reviewList.map(({ id, ...props }, index) => {
                    return (
                        <Fragment key={id}>
                            <ArticleSearchItem
                                type="review"
                                id={id}
                                {...props}
                                loading={index < 3 ? 'eager' : 'lazy'}
                                short
                            />
                            {index !== reviewList.length - 1 && <ArticleDivider xsOnly />}
                        </Fragment>
                    );
                })}
            </ColumnContainer>
        </>
    );
};

export default ReviewList;
