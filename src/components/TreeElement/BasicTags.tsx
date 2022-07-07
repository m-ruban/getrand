import React, { FC, ReactNode } from 'react';

import { H2 } from 'gg-ukit/components/Header';
import Link, { LinkType } from 'gg-ukit/components/Link';

export const Bold: FC<{ children: ReactNode }> = ({ children }) => {
    return <b>{children}</b>;
};

export const Underline: FC<{ children: ReactNode }> = ({ children }) => {
    return <u>{children}</u>;
};

export const Italic: FC<{ children: ReactNode }> = ({ children }) => {
    return <i>{children}</i>;
};

export const Strike: FC<{ children: ReactNode }> = ({ children }) => {
    return <s>{children}</s>;
};

export const ListItem: FC<{ children: ReactNode }> = ({ children }) => {
    return <li>{children}</li>;
};

export const Tr: FC<{ children: ReactNode }> = ({ children }) => {
    return <tr>{children}</tr>;
};

export const Td: FC<{ children: ReactNode }> = ({ children }) => {
    return <td>{children}</td>;
};

export const H2T2Content: FC<{ children: string; hash: string }> = ({ children, hash }) => {
    return (
        <div id={hash}>
            <H2 title={children} />
        </div>
    );
};

export const LinkAdapter: FC<{ children: ReactNode; href: string }> = ({ children, href }) => {
    return (
        <Link type={LinkType.Secondary} href={href}>
            {children}
        </Link>
    );
};
