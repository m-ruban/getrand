import React, { FC } from 'react';

import Paragraph from 'gg-ukit/components/Paragraph';

import { getTrl } from 'lang/trls';

import 'components/ArticleView/articleView.less';

const Keywords: FC<{
    keywords: string;
}> = ({ keywords }) => {
    return (
        <div>
            {keywords && (
                <Paragraph>
                    {getTrl('keywordsLabel')} {keywords.split(',').join(', ')}
                </Paragraph>
            )}
        </div>
    );
};

export default Keywords;
