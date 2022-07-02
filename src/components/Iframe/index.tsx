import React, { FC } from 'react';

import 'components/Iframe/iframe.less';

interface IframeProps {
    width: string;
    height: string;
    src: string;
    title: string;
    frameborder: string;
    allow: string;
    allowfullscreen: boolean;
}

const Iframe: FC<IframeProps> = (props) => {
    return (
        <div className="iframe-wrapper">
            <iframe className="iframe" {...props} />
        </div>
    );
};

export default Iframe;
