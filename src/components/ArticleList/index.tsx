import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { H2 } from 'gg-ukit/components/Header';
import { HeaderLine } from 'gg-ukit/components/Header/BasicHeader';

import { RootStore } from 'models/reducers';

import ArticleSearchItem from 'components/ArticleSearchItem';
import ColumnContainer from 'components/ColumnContainer';

const ArticleList: FC = () => {
    const title = useSelector((state: RootStore) => state.metaTags.title);
    const articles = useSelector((state: RootStore) => state.articles);
    return (
        <>
            <H2 title={title} line={HeaderLine.TertiaryDimmed} />
            <ColumnContainer>
                {articles.map(({ id, article_type_keyword: type, ...props }) => {
                    return (
                        <ArticleSearchItem
                            key={id}
                            id={id}
                            type={type == 'walkthrough' ? 'guide' : 'review'}
                            article_type_keyword={type}
                            {...props}
                            short
                        />
                    );
                })}
            </ColumnContainer>
        </>
    );
};

export default ArticleList;
