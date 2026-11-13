import React, { FC, ImgHTMLAttributes } from 'react';

import 'components/BlurredImage/blurredImage.less';

const BlurredImage: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, src, alt, loading, ...props }) => (
    <span className="blurred-image">
        <img className="blurred-image-background" src={src} alt="" aria-hidden="true" loading={loading} />
        <img {...props} className={className} src={src} alt={alt} loading={loading} />
    </span>
);

export default BlurredImage;
