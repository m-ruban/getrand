import React, { FC, ReactNode } from 'react';

import CommentAlt from 'gg-ukit/components/Icon/CommentAlt';
import Tooltip from 'gg-ukit/components/Tooltip';

import 'components/ArticleTooltip/articleTooltip.less';

const ArticleTooltip: FC<{ children: ReactNode; view: ReactNode }> = ({ children, view }) => {
    return (
        <>
            <Tooltip view={view}>{children}</Tooltip>{' '}
            <span className="article-tooltip-icon">
                <CommentAlt scale={1} color="#738697" />
            </span>
        </>
    );
};

export default ArticleTooltip;
