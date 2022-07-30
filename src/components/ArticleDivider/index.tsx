import React, { FC } from 'react';
import classnames from 'classnames';

import 'components/ArticleDivider/articleDivider.less';

interface ArticleDividerProps {
    xsOnly?: boolean;
}

const ArticleDivider: FC<ArticleDividerProps> = ({ xsOnly = false }) => (
    <div className={classnames('article-divider', { 'article-divider_xs-only': xsOnly })} />
);

export default ArticleDivider;
