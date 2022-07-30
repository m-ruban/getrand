import React, { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';

import { H2 } from 'gg-ukit/components/Header';
import { HeaderLine } from 'gg-ukit/components/Header/BasicHeader';

import { RootStore } from 'models/reducers';

import ArticleDivider from 'components/ArticleDivider';
import ArticleSearchItem from 'components/ArticleSearchItem';
import ColumnContainer from 'components/ColumnContainer';

const ArticleList: FC = () => {
    const title = useSelector((state: RootStore) => state.metaTags.shortTitle);
    const articles = useSelector((state: RootStore) => state.articles);
    return (
        <>
            <H2 title={title} line={HeaderLine.TertiaryDimmed} />
            <ColumnContainer>
                {articles.map(({ id, article_type_keyword: type, ...props }, index) => {
                    return (
                        <Fragment key={id}>
                            <ArticleSearchItem
                                id={id}
                                type={type == 'walkthrough' ? 'guide' : 'review'}
                                article_type_keyword={type}
                                {...props}
                                loading={index < 3 ? 'eager' : 'lazy'}
                                short
                            />
                            {index !== articles.length - 1 && <ArticleDivider xsOnly />}
                        </Fragment>
                    );
                })}
            </ColumnContainer>
        </>
    );
};

export default ArticleList;
