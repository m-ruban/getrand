import React, { FC } from 'react';

import { H2 } from 'gg-ukit/components/Header';
import Link, { LinkType } from 'gg-ukit/components/Link';
import List from 'gg-ukit/components/List';

import { Article as ArticleShort } from 'models/announce';

import { articleLink } from 'modules/links';

import Section from 'components/Section';
import { ListItem } from 'components/TreeElement/BasicTags';

import 'components/ArticleView/articleView.less';

const RelatedArticles: FC<{ articles: ArticleShort[]; type: string }> = ({ articles, type }) => {
    if (articles.length === 0) {
        return null;
    }
    return (
        <Section>
            <H2 title="Оглавление" />
            <List>
                {articles.map(({ id, seo: { name, keyword } }) => {
                    return (
                        <ListItem key={id}>
                            <Link type={LinkType.Secondary} href={articleLink(type, keyword)}>
                                {name}
                            </Link>
                        </ListItem>
                    );
                })}
            </List>
        </Section>
    );
};

export default RelatedArticles;
