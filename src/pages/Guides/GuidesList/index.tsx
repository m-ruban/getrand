import React, { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';

import { ImageLoad } from 'gg-ukit/components/Image';

import { RootStore } from 'models/reducers';

import ArticleDivider from 'components/ArticleDivider';
import ArticleSearchItem from 'components/ArticleSearchItem';
import ColumnContainer from 'components/ColumnContainer';
import SectionHeader from 'components/SectionHeader';

const GuidesList: FC = () => {
    const guides = useSelector((state: RootStore) => state.guides);
    return (
        <>
            <SectionHeader title="Гайды по играм" combineColor />
            <ColumnContainer>
                {guides.map(({ id, ...props }, index) => {
                    return (
                        <Fragment key={id}>
                            <ArticleSearchItem
                                type="guide"
                                id={id}
                                {...props}
                                loading={index < 2 ? ImageLoad.Eager : ImageLoad.Lazy}
                            />
                            {index !== guides.length - 1 && <ArticleDivider />}
                        </Fragment>
                    );
                })}
            </ColumnContainer>
        </>
    );
};

export default GuidesList;
