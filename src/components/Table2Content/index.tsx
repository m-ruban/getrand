import React, { FC } from 'react';

import { H2 } from 'gg-ukit/components/Header';
import Link, { LinkType } from 'gg-ukit/components/Link';
import List from 'gg-ukit/components/List';

import Section from 'components/Section';
import { ListItem } from 'components/TreeElement/BasicTags';

interface Table2ContentItem {
    hash: string;
    title: string;
}

export const Table2Content: FC<{ links: Table2ContentItem[] }> = ({ links }) => {
    if (links.length === 0) {
        return null;
    }
    return (
        <Section>
            <div>
                <H2 title="Содержание" />
            </div>
            <List>
                {links.map(({ hash, title }) => {
                    return (
                        <ListItem key={hash}>
                            <Link type={LinkType.Secondary} href={`#${hash}`}>
                                {title}
                            </Link>
                        </ListItem>
                    );
                })}
            </List>
        </Section>
    );
};

export default Table2Content;
