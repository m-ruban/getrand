import React, { FC } from 'react';

import Link, { LinkType } from 'gg-ukit/components/Link';
import Paragraph from 'gg-ukit/components/Paragraph';

import { Article as ArticleShort } from 'models/announce';

import { articleLink, REVIEWS } from 'modules/links';

import Section from 'components/Section';

const ParentLink: FC<ArticleShort> = ({ seo: { name, keyword } }) => {
    return (
        <Section>
            <Paragraph>
                Статья является частью цикла{' '}
                <Link type={LinkType.Secondary} href={articleLink(REVIEWS, keyword)}>
                    {name}
                </Link>
            </Paragraph>
        </Section>
    );
};

export default ParentLink;
