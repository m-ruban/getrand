import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootStore } from 'models/reducers';

import Authors from 'components/ArticleView/Authors';
import RelatedArticles from 'components/ArticleView/RelatedArticles';
import CategoryBadges from 'components/CategoryBadges';
import Keywords from 'components/Keywords';
import LitePageLayout from 'components/LitePageLayout';
import TreeElement from 'components/TreeElement';

import './sharedArticle.less';

const SharedArticle: FC = () => {
    const { seo, categories, redactor, autor, children, article_type_keyword } = useSelector(
        (state: RootStore) => state.article
    );
    return (
        <LitePageLayout>
            <div>
                <div className="shared-article-categories">
                    <CategoryBadges categories={categories} />
                </div>
                <TreeElement treeElement={seo.render_tree} />
                <RelatedArticles articles={children} type={article_type_keyword} />
                <div>
                    <Authors redactor={redactor} author={autor} />
                    <Keywords keywords={seo.meta_keyword} />
                </div>
            </div>
        </LitePageLayout>
    );
};

export default SharedArticle;
