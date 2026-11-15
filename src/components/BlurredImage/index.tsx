import React, { CSSProperties, FC, ImgHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';

import 'components/BlurredImage/blurredImage.less';

interface BlurredImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    edgeFade?: number;
}

const BlurredImage: FC<BlurredImageProps> = ({
    className,
    src,
    alt,
    loading,
    onLoad,
    style,
    edgeFade = 8,
    ...props
}) => {
    const imageRef = useRef<HTMLImageElement>(null);
    const [mask, setMask] = useState<CSSProperties>({});

    const updateMask = useCallback(() => {
        const image = imageRef.current;
        if (!image?.naturalWidth || !image.naturalHeight) return;

        const { clientWidth: width, clientHeight: height, naturalWidth, naturalHeight } = image;
        const scale = Math.min(width / naturalWidth, height / naturalHeight);
        const insetX = Math.max(0, (width - naturalWidth * scale) / 2);
        const insetY = Math.max(0, (height - naturalHeight * scale) / 2);
        const gradient = (direction: string, inset: number, size: number) => {
            if (inset < 1 || edgeFade <= 0) return 'linear-gradient(#000, #000)';
            const fade = Math.min(edgeFade, (size - 2 * inset) / 2);
            return `linear-gradient(${direction}, transparent ${inset}px, #000 ${inset + fade}px, #000 ${
                size - inset - fade
            }px, transparent ${size - inset}px)`;
        };
        const maskImage = `${gradient('to right', insetX, width)}, ${gradient('to bottom', insetY, height)}`;
        setMask({ maskImage, WebkitMaskImage: maskImage });
    }, [edgeFade]);

    useEffect(() => {
        updateMask();
        const observer = new ResizeObserver(updateMask);
        if (imageRef.current) observer.observe(imageRef.current);
        return () => observer.disconnect();
    }, [src, updateMask]);

    return (
        <span className="blurred-image">
            <img className="blurred-image-background" src={src} alt="" aria-hidden="true" loading={loading} />
            <img
                {...props}
                ref={imageRef}
                className={`blurred-image-foreground${className ? ` ${className}` : ''}`}
                src={src}
                alt={alt}
                loading={loading}
                style={{ ...style, ...mask }}
                onLoad={(event) => {
                    updateMask();
                    onLoad?.(event);
                }}
            />
        </span>
    );
};

export default BlurredImage;
