import React, { FC, ReactNode, useState } from 'react';

import Column from 'gg-ukit/components/Column';
import { H2 } from 'gg-ukit/components/Header';
import { HeaderLine } from 'gg-ukit/components/Header/BasicHeader';
import DocumentTextAlt from 'gg-ukit/components/Icon/DocumentTextAlt';
import Sheet, { SheetPositionType } from 'gg-ukit/components/Sheet';

import 'components/ArticleSheet/articleSheet.less';

interface ArticleSheetProps {
    trigger: string;
    title: string;
    position: SheetPositionType;
    children: ReactNode;
}

const ArticleSheet: FC<ArticleSheetProps> = ({ trigger, title, position, children }) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <span
                className="article-sheet-trigger"
                onClick={() => {
                    setShow(!show);
                }}
            >
                {trigger}
            </span>{' '}
            <span className="article-sheet-icon">
                <DocumentTextAlt scale={1} color="#738697" />
            </span>
            <Sheet
                header={<H2 title={title} line={HeaderLine.TertiaryDimmed} />}
                positionType={position}
                visible={show}
                onClose={() => {
                    setShow(false);
                }}
            >
                <Column l={6} m={8} s={5} xs={4} container>
                    {children}
                </Column>
            </Sheet>
        </>
    );
};

export default ArticleSheet;
