import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootStore } from 'models/reducers';

import Authors from 'components/ArticleView/Authors';
import ParentLink from 'components/ArticleView/ParentLink';
import RelatedArticles from 'components/ArticleView/RelatedArticles';
import CategoryBadges from 'components/CategoryBadges';
import Comments from 'components/Comments';
import Keywords from 'components/Keywords';
import SectionHeader from 'components/SectionHeader';
import TreeElement from 'components/TreeElement';

import 'components/ArticleView/articleView.less';

const ArticleView: FC = () => {
    const { seo, categories, redactor, autor, children, parent, article_type_keyword } = useSelector(
        (state: RootStore) => state.article
    );
    const { name, render_tree, meta_keyword } = seo;
    return (
        <div>
            <SectionHeader title={name} />
            <div className="article-categories">
                <CategoryBadges categories={categories} />
            </div>
            <TreeElement treeElement={render_tree} />
            <RelatedArticles articles={children} type={article_type_keyword} />
            <div>
                <Authors redactor={redactor} author={autor} />
                <Keywords keywords={meta_keyword} />
            </div>
            {parent && <ParentLink {...parent} type={article_type_keyword} />}
            <Comments />
        </div>
    );
};

export default ArticleView;
