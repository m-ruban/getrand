import React, { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';

import { ImageLoad } from 'gg-ukit/components/Image';

import { RootStore } from 'models/reducers';

import ArticleDivider from 'components/ArticleDivider';
import ArticleSearchItem from 'components/ArticleSearchItem';
import ColumnContainer from 'components/ColumnContainer';
import SectionHeader from 'components/SectionHeader';

const ArticleList: FC = () => {
    const title = useSelector((state: RootStore) => state.metaTags.shortTitle);
    const articles = useSelector((state: RootStore) => state.articles);
    return (
        <>
            <SectionHeader title={title} />
            <ColumnContainer>
                {articles.map(({ id, article_type_keyword: type, ...props }, index) => {
                    return (
                        <Fragment key={id}>
                            <ArticleSearchItem
                                id={id}
                                type={type == 'walkthrough' ? 'guide' : 'review'}
                                article_type_keyword={type}
                                {...props}
                                loading={index < 3 ? ImageLoad.Eager : ImageLoad.Lazy}
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
