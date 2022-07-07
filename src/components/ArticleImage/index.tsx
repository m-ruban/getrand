import React, { FC } from 'react';

import Button, { ButtonKind } from 'gg-ukit/components/Button';
import SearchAdd from 'gg-ukit/components/Icon/SearchAdd';
import Image, { BasicImageProps } from 'gg-ukit/components/Image';
import FramedImage, { FramedImageKind } from 'gg-ukit/components/Image/FramedImage';
import Modal from 'gg-ukit/components/Modal';
import Colors from 'gg-ukit/modules/colors';

import { gallerySrcImg } from 'modules/links';

import useZoom, { EMPTY_IMG } from 'hooks/useZoom';

interface ArticleImageProps extends BasicImageProps {
    preview: string;
    note: string;
    kind?: FramedImageKind;
}

const ArticleImage: FC<ArticleImageProps> = ({ src, alt, preview, kind, note = '' }) => {
    const [zoom, setZoom] = useZoom();
    return (
        <>
            <Modal
                visible={zoom.show}
                onClose={() => {
                    setZoom({ show: false, img: { ...EMPTY_IMG } });
                }}
            >
                <Image {...zoom.img} src={gallerySrcImg(zoom.img.src)} />
            </Modal>
            <FramedImage
                alt={alt}
                src={gallerySrcImg(preview)}
                note={note}
                kind={kind}
                hoverView={
                    <Button
                        kind={ButtonKind.Promo}
                        onClick={() => {
                            setZoom({ show: true, img: { alt, src } });
                        }}
                        icon={<SearchAdd color={Colors.Secondary} />}
                        rounded
                    />
                }
            />
        </>
    );
};

export default ArticleImage;
