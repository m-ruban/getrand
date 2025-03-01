import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { ImageLoad } from 'gg-ukit/components/Image';

import { RootStore } from 'models/reducers';

import { ImageLoadContext } from 'hooks/useImageLoadType';

import Authors from 'components/ArticleView/Authors';
import RelatedArticles from 'components/ArticleView/RelatedArticles';
import Keywords from 'components/Keywords';
import LitePageLayout from 'components/LitePageLayout';
import TreeElement from 'components/TreeElement';

import './sharedArticle.less';

const SharedArticle: FC = () => {
    const { seo, redactor, autor, children, article_type_keyword } = useSelector((state: RootStore) => state.article);
    return (
        <ImageLoadContext.Provider value={ImageLoad.Eager}>
            <LitePageLayout>
                <div>
                    <TreeElement treeElement={seo.render_tree} />
                    <RelatedArticles articles={children} type={article_type_keyword} />
                    <div>
                        <Authors redactor={redactor} author={autor} />
                        <Keywords keywords={seo.meta_keyword} />
                    </div>
                </div>
            </LitePageLayout>
        </ImageLoadContext.Provider>
    );
};

export default SharedArticle;
