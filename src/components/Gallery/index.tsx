import React, { FC } from 'react';

import Button, { ButtonKind } from 'gg-ukit/components/Button';
import SearchAdd from 'gg-ukit/components/Icon/SearchAdd';
import Image, { BasicImageProps } from 'gg-ukit/components/Image';
import HoveredImage from 'gg-ukit/components/Image/HoveredImage';
import Modal from 'gg-ukit/components/Modal';
import Slider from 'gg-ukit/components/Slider';
import Colors from 'gg-ukit/modules/colors';

import { gallerySrcImg } from 'modules/links';

import useZoom, { EMPTY_IMG } from 'hooks/useZoom';

import 'components/Gallery/gallery.less';

interface GalleryImage extends BasicImageProps {
    preview: string;
}

interface GalleryProps {
    slides: GalleryImage[];
    note?: string;
}

const Gallery: FC<GalleryProps> = ({ slides, note }) => {
    const [zoom, setZoom] = useZoom();
    return (
        <div className="gallery-wrapper">
            <div className="gallery">
                <Modal
                    visible={zoom.show}
                    onClose={() => {
                        setZoom({ show: false, img: { ...EMPTY_IMG } });
                    }}
                >
                    <Image {...zoom.img} src={gallerySrcImg(zoom.img.src)} />
                </Modal>
                <Slider
                    note={note}
                    slides={slides.map(({ alt, src, preview }) => {
                        return {
                            view: (
                                <HoveredImage
                                    alt={alt}
                                    src={gallerySrcImg(preview)}
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
                            ),
                            preview: <Image alt={alt} src={gallerySrcImg(preview)} />,
                        };
                    })}
                />
            </div>
        </div>
    );
};

export default Gallery;
