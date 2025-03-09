import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { ImageLoad } from 'gg-ukit/components/Image';

import { RootStore } from 'models/reducers';

import { ImageLoadContext } from 'hooks/useImageLoadType';

import RelatedArticles from 'components/ArticleView/RelatedArticles';
import LitePageLayout from 'components/LitePageLayout';
import TreeElement from 'components/TreeElement';

import './sharedArticle.less';

const SharedArticle: FC = () => {
    const { seo, children, article_type_keyword } = useSelector((state: RootStore) => state.article);
    return (
        <ImageLoadContext.Provider value={ImageLoad.Eager}>
            <LitePageLayout>
                <div>
                    <TreeElement treeElement={seo.render_tree} />
                    <RelatedArticles articles={children} type={article_type_keyword} />
                </div>
            </LitePageLayout>
        </ImageLoadContext.Provider>
    );
};

export default SharedArticle;
