import React, { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';

import { ImageLoad } from 'gg-ukit/components/Image';

import { RootStore } from 'models/reducers';

import ArticleDivider from 'components/ArticleDivider';
import ArticleSearchItem from 'components/ArticleSearchItem';
import ColumnContainer from 'components/ColumnContainer';
import SectionHeader from 'components/SectionHeader';

const ReviewList: FC = () => {
    const reviewList = useSelector((state: RootStore) => state.reviews);
    return (
        <>
            <SectionHeader title="Обзоры игр" combineColor />
            <ColumnContainer>
                {reviewList.map(({ id, ...props }, index) => {
                    return (
                        <Fragment key={id}>
                            <ArticleSearchItem
                                type="review"
                                id={id}
                                {...props}
                                loading={index < 3 ? ImageLoad.Eager : ImageLoad.Lazy}
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
