import React, { FC, memo, useCallback, useEffect, useRef, useState } from 'react';

import elementObserver from 'modules/elementObserver';

import 'components/Comments/comments.less';

const VK_OPEN_API = 'https://vk.com/js/api/openapi.js?168';

interface LoadPromise {
    error: boolean;
}

const loadRemoteScript = (src: string) => {
    return new Promise<LoadPromise>((resolve, reject) => {
        // create script request
        const tag = document.createElement('script');
        const container = document.head;
        tag.type = 'text/javascript';
        tag.src = src;
        // some events
        tag.addEventListener('load', () => {
            resolve({ error: false });
        });
        tag.addEventListener('error', () => {
            reject({ error: true });
        });
        // add tag to head
        container.appendChild(tag);
    });
};

const Comments: FC = () => {
    const vkRef = useRef<HTMLDivElement>(null);
    const [injectWidget, setInjectWidget] = useState<boolean>(false);

    const onShowLoader = useCallback(() => {
        setInjectWidget((value) => !value);
    }, []);

    useEffect(() => {
        if (injectWidget) {
            loadRemoteScript(VK_OPEN_API).then(({ error }) => {
                if (error) {
                    return;
                }
                /* eslint-disable @typescript-eslint/ban-ts-comment */
                // @ts-ignore-start
                VK.init({ apiId: 6456413, onlyWidgets: true });
                // @ts-ignore
                VK.Widgets.Comments('vk_comments', { limit: 5, attach: '*' });
                /* eslint-enable @typescript-eslint/ban-ts-comment */
            });
        }
    }, [injectWidget]);

    useEffect(() => {
        if (!vkRef.current) {
            return;
        }
        if (injectWidget) {
            return;
        }
        const loaderObserver = elementObserver({
            element: vkRef.current,
            onShow: onShowLoader,
            rootMargin: '0px 0px 500px 0px',
        });
        return () => {
            loaderObserver.stopObserverving();
        };
    }, [onShowLoader, injectWidget]);

    return (
        <div className="comments">
            <div ref={vkRef} id="vk_comments" />
        </div>
    );
};

export default memo(Comments);
