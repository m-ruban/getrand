import { Fragment } from 'react';

import { H1, H2, H3, H4 } from 'gg-ukit/components/Header';
import List from 'gg-ukit/components/List';
import Note from 'gg-ukit/components/Note';
import Paragraph from 'gg-ukit/components/Paragraph';
import Tooltip from 'gg-ukit/components/Tooltip';

import ArticleImage from 'components/ArticleImage';
import Gallery from 'components/Gallery';
import { GameSearchItemAdapter } from 'components/GameSearchItem';
import Iframe from 'components/Iframe';
import Section from 'components/Section';
import Table2Content from 'components/Table2Content';
import TableResult from 'components/TableResult';
import { Bold, H2T2Content, Italic, LinkAdapter, ListItem, Strike, Underline } from 'components/TreeElement/BasicTags';

export default {
    a: LinkAdapter,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h2li: H2T2Content,
    fragment: Fragment,
    section: Section,
    p: Paragraph,
    b: Bold,
    i: Italic,
    s: Strike,
    u: Underline,
    table2content: Table2Content,
    gallery: Gallery,
    mygallery: Gallery,
    game: GameSearchItemAdapter,
    tooltip: Tooltip,
    center: Fragment,
    iframe: Iframe,
    note: Note,
    list: List,
    li: ListItem,
    result: TableResult,
    customHoveredImg: ArticleImage,
};
