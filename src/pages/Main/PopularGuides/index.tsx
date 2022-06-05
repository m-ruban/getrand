import React, { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';

import { RootStore } from 'models/reducers';

import ArticleSidebarItem from 'components/ArticleSidebarItem';

const PopularGuides: FC = () => {
    const popularGuides = useSelector((state: RootStore) => state.popularGuides);
    return (
        <>
            {popularGuides.map(({ id, ...props }) => {
                return <ArticleSidebarItem key={id} type="guide" id={id} {...props} />;
            })}
        </>
    );
};

export default PopularGuides;
