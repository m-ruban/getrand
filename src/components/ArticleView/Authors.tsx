import React, { FC } from 'react';

import Link, { LinkType } from 'gg-ukit/components/Link';
import Paragraph from 'gg-ukit/components/Paragraph';

import { Author } from 'models/article';

import { host } from 'modules/links';

import 'components/ArticleView/articleView.less';

const Authors: FC<{ redactor: Author; author: Author }> = ({ redactor, author }) => {
    return (
        <>
            <Paragraph>
                Автор: {author.name} для сайта{' '}
                <Link type={LinkType.Secondary} href={host}>
                    GameSpirit.org
                </Link>
            </Paragraph>
            {author.id != redactor.id && <Paragraph>Редактор: {redactor.name}</Paragraph>}
        </>
    );
};

export default Authors;
