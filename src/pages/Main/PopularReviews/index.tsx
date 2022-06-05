import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootStore } from 'models/reducers';

import ArticleSidebarItem from 'components/ArticleSidebarItem';

const PopularReviews: FC = () => {
    const popularReviews = useSelector((state: RootStore) => state.popularReviews);
    return (
        <>
            {popularReviews.map(({ id, ...props }) => {
                return <ArticleSidebarItem key={id} type="review" id={id} {...props} />;
            })}
        </>
    );
};

export default PopularReviews;
