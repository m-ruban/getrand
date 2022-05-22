import React, { FC, useState } from 'react';

import Column from 'gg-ukit/components/Column';
import ColumnsWrapper from 'gg-ukit/components/ColumnsWrapper';
import SearchAdd from 'gg-ukit/components/Icon/SearchAdd';
import Image from 'gg-ukit/components/Image';
import HoveredImage from 'gg-ukit/components/Image/HoveredImage';
import Modal from 'gg-ukit/components/Modal';
import Slider from 'gg-ukit/components/Slider';

interface ImagesProp {
    title: string;
}

const emptyImg = { src: '', alt: '' };
const slide1 = { src: 'http://gamespirit.org/image/call-of-the-sea-review/QBjnz_1.jpg', alt: 'test image 1' };
const slide2 = { src: 'http://gamespirit.org/image/call-of-the-sea-review/NqtQR_2.jpg', alt: 'test image 2' };

const Images: FC<ImagesProp> = ({ title }) => {
    const [zoomImg, setZoomImg] = useState({ show: false, img: { ...emptyImg } });
    return (
        <div>
            <div>{title}</div>
            <ColumnsWrapper>
                <Column l={7} m={8}>
                    <div>
                        <Modal
                            visible={zoomImg.show}
                            onClose={() => {
                                setZoomImg({ show: false, img: { ...emptyImg } });
                            }}
                        >
                            <Image {...zoomImg.img} />
                        </Modal>
                        <Slider
                            slides={[slide1, slide2].map((image) => {
                                return {
                                    view: (
                                        <HoveredImage
                                            {...image}
                                            hoverView={<SearchAdd color="#DB9D39" scale={2} />}
                                            onHoverViewClick={() => {
                                                setZoomImg({ show: true, img: { ...image } });
                                            }}
                                        />
                                    ),
                                    preview: <Image {...image} />,
                                };
                            })}
                        />
                    </div>
                </Column>
            </ColumnsWrapper>
        </div>
    );
};

export default Images;
