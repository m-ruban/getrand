import { Fragment } from 'react';

import Collapse from 'gg-ukit/components/Collapse';
import { H1, H2, H3, H4 } from 'gg-ukit/components/Header';
import List from 'gg-ukit/components/List';
import Note from 'gg-ukit/components/Note';
import Paragraph from 'gg-ukit/components/Paragraph';

import ArticleImage from 'components/ArticleImage';
import ArticleModal from 'components/ArticleModal';
import ArticleSheet from 'components/ArticleSheet';
import ArticleTooltip from 'components/ArticleTooltip';
import Gallery from 'components/Gallery';
import { GameSearchItemAdapter } from 'components/GameSearchItem';
import Iframe from 'components/Iframe';
import Section from 'components/Section';
import Table from 'components/Table';
import Table2Content from 'components/Table2Content';
import TableResult from 'components/TableResult';
import {
    Bold,
    H2T2Content,
    Italic,
    LinkAdapter,
    ListItem,
    Strike,
    Td,
    Tr,
    Underline,
} from 'components/TreeElement/BasicTags';

export default {
    a: LinkAdapter,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h2li: H2T2Content,
    fragment: Fragment,
    section: Section,
    spoiler: Collapse,
    p: Paragraph,
    b: Bold,
    strong: Bold,
    strike: Strike,
    table: Table,
    modal: ArticleModal,
    pmodal: Paragraph,
    tr: Tr,
    td: Td,
    i: Italic,
    s: Strike,
    u: Underline,
    table2content: Table2Content,
    gallery: Gallery,
    mygallery: Gallery,
    game: GameSearchItemAdapter,
    tooltip: ArticleTooltip,
    sheet: ArticleSheet,
    psheet: Paragraph,
    center: Fragment,
    iframe: Iframe,
    note: Note,
    list: List,
    ul: List,
    li: ListItem,
    result: TableResult,
    customHoveredImg: ArticleImage,
    ggimg: ArticleImage,
};
