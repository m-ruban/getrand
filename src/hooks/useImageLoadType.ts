import { createContext, useContext } from 'react';

import { ImageLoad } from 'gg-ukit/components/Image';

export const ImageLoadContext = createContext(ImageLoad.Lazy);

export const useImageLoadType = (): ImageLoad => useContext(ImageLoadContext);
