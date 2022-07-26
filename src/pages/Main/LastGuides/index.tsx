import React, { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';

import { H2 } from 'gg-ukit/components/Header';
import { HeaderLine } from 'gg-ukit/components/Header/BasicHeader';

import { RootStore } from 'models/reducers';

import ArticleDivider from 'components/ArticleDivider';
import ArticleSearchItem from 'components/ArticleSearchItem';
import ColumnContainer from 'components/ColumnContainer';

const LastGuides: FC = () => {
    const lastGuides = useSelector((state: RootStore) => state.lastGuides);
    return (
        <>
            <H2 title="Последние гайды" line={HeaderLine.TertiaryDimmed} combineColor />
            <ColumnContainer>
                {lastGuides.map(({ id, ...props }, index) => {
                    return (
                        <Fragment key={id}>
                            <ArticleSearchItem type="guide" id={id} {...props} loading="lazy" />
                            {index !== lastGuides.length - 1 && <ArticleDivider />}
                        </Fragment>
                    );
                })}
            </ColumnContainer>
        </>
    );
};

export default LastGuides;
