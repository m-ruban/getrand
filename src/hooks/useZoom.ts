import { Dispatch, SetStateAction, useState } from 'react';

import { BasicImageProps } from 'gg-ukit/components/Image';

interface ZoomState {
    show: boolean;
    img: BasicImageProps;
}

type UseZoom = [ZoomState, Dispatch<SetStateAction<ZoomState>>];

export const EMPTY_IMG: BasicImageProps = { src: '', alt: '' };

const useZoom = (): UseZoom => {
    return useState<ZoomState>({
        show: false,
        img: { ...EMPTY_IMG },
    });
};

export default useZoom;
