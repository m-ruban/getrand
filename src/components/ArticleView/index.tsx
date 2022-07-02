import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { H2 } from 'gg-ukit/components/Header';
import { HeaderLine } from 'gg-ukit/components/Header/BasicHeader';
import Link, { LinkType } from 'gg-ukit/components/Link';
import Paragraph from 'gg-ukit/components/Paragraph';

import { RootStore } from 'models/reducers';

import { host } from 'modules/links';

import CategoryBadges from 'components/CategoryBadges';
import TreeElement from 'components/TreeElement';

import 'components/ArticleView/articleView.less';

const ArticleView: FC = () => {
    const { seo, categories, redactor, autor } = useSelector((state: RootStore) => state.article);
    const { name, render_tree, meta_keyword } = seo;
    return (
        <div>
            <H2 title={name} line={HeaderLine.TertiaryDimmed} combineColor />
            <div className="article-categories">
                <CategoryBadges categories={categories} />
            </div>
            <TreeElement treeElement={render_tree} />
            <div>
                <Paragraph>
                    Автор: {autor.name} для сайта{' '}
                    <Link type={LinkType.Secondary} href={host}>
                        GameSpirit.org
                    </Link>
                </Paragraph>
                {autor.id != redactor.id && <Paragraph>Редактор: {redactor.name}</Paragraph>}
                <Paragraph>Ключевые слова: {meta_keyword}</Paragraph>
            </div>
        </div>
    );
};

export default ArticleView;
