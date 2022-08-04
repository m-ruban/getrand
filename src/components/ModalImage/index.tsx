import React, { FC } from 'react';

import { BasicImageProps } from 'gg-ukit/components/Image';

import 'components/ModalImage/modalImage.less';

const ModalImage: FC<BasicImageProps> = ({ alt, src }) => {
    return <img className="modal-image" alt={alt} src={src} />;
};

export default ModalImage;
