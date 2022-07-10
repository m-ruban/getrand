import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { H2 } from 'gg-ukit/components/Header';
import { HeaderLine } from 'gg-ukit/components/Header/BasicHeader';
import Paragraph from 'gg-ukit/components/Paragraph';

import { RootStore } from 'models/reducers';

import Authors from 'components/ArticleView/Authors';
import ParentLink from 'components/ArticleView/ParentLink';
import RelatedArticles from 'components/ArticleView/RelatedArticles';
import CategoryBadges from 'components/CategoryBadges';
import Keywords from 'components/Keywords';
import TreeElement from 'components/TreeElement';

import 'components/ArticleView/articleView.less';

const ArticleView: FC = () => {
    const { seo, categories, redactor, autor, children, parent } = useSelector((state: RootStore) => state.article);
    const { name, render_tree, meta_keyword } = seo;
    return (
        <div>
            <H2 title={name} line={HeaderLine.TertiaryDimmed} />
            <div className="article-categories">
                <CategoryBadges categories={categories} />
            </div>
            <TreeElement treeElement={render_tree} />
            <RelatedArticles articles={children} />
            <div>
                <Authors redactor={redactor} author={autor} />
                <Keywords keywords={meta_keyword} />
            </div>
            {parent && <ParentLink {...parent} />}
        </div>
    );
};

export default ArticleView;
