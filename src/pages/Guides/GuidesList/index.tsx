import React, { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';

import { H2 } from 'gg-ukit/components/Header';
import { HeaderLine } from 'gg-ukit/components/Header/BasicHeader';

import { RootStore } from 'models/reducers';

import ArticleDivider from 'components/ArticleDivider';
import ArticleSearchItem from 'components/ArticleSearchItem';
import ColumnContainer from 'components/ColumnContainer';

const GuidesList: FC = () => {
    const guides = useSelector((state: RootStore) => state.guides);
    return (
        <>
            <H2 title="Гайды по играм" line={HeaderLine.TertiaryDimmed} combineColor />
            <ColumnContainer>
                {guides.map(({ id, ...props }, index) => {
                    return (
                        <Fragment key={id}>
                            <ArticleSearchItem type="guide" id={id} {...props} loading={index < 2 ? 'eager' : 'lazy'} />
                            {index !== guides.length - 1 && <ArticleDivider />}
                        </Fragment>
                    );
                })}
            </ColumnContainer>
        </>
    );
};

export default GuidesList;
