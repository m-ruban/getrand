import React, { FC } from 'react';

import Link, { LinkType } from 'gg-ukit/components/Link';
import Paragraph from 'gg-ukit/components/Paragraph';

import { Article as ArticleShort } from 'models/announce';

import { articleLink } from 'modules/links';

import Section from 'components/Section';

import { getTrl } from 'lang/trls';
interface ParentLinkProps extends ArticleShort {
    type: string;
}

const ParentLink: FC<ParentLinkProps> = ({ seo: { name, keyword }, type }) => {
    return (
        <Section>
            <Paragraph>
                {getTrl('partOfSeries')}{' '}
                <Link type={LinkType.Secondary} href={articleLink(type, keyword)}>
                    {name}
                </Link>
            </Paragraph>
        </Section>
    );
};

export default ParentLink;
