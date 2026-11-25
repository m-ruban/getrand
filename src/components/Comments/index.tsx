import React, { FC, memo, useCallback, useEffect, useRef, useState } from 'react';
import { getLanguage } from 'lang/language';

import elementObserver from 'modules/elementObserver';

import 'components/Comments/comments.less';

const VK_OPEN_API = 'https://vk.com/js/api/openapi.js?168';
const DISFORA_SCRIPT = 'https://disfora.com/public/disfora.js';

const scriptLoads = new Map<string, Promise<boolean>>();

const loadRemoteScript = (src: string) => {
    const existing = scriptLoads.get(src);
    if (existing) {
        return existing;
    }
    const loading = new Promise<boolean>((resolve) => {
        const tag = document.createElement('script');
        tag.type = 'text/javascript';
        tag.src = src;
        tag.async = true;
        if (src === DISFORA_SCRIPT) {
            tag.setAttribute('data-floating-button', 'false');
        }
        tag.addEventListener('load', () => {
            resolve(true);
        });
        tag.addEventListener('error', () => {
            tag.remove();
            scriptLoads.delete(src);
            resolve(false);
        });
        document.head.appendChild(tag);
    });
    scriptLoads.set(src, loading);
    return loading;
};

const Comments: FC = () => {
    const language = getLanguage();
    const commentsRef = useRef<HTMLDivElement>(null);
    const [injectWidget, setInjectWidget] = useState<boolean>(false);

    const onShowLoader = useCallback(() => {
        setInjectWidget(true);
    }, []);

    // Загружаем выбранный сервис/инициализируем VK при приближении к блоку комментариев
    useEffect(() => {
        let cancelled = false;
        if (injectWidget) {
            loadRemoteScript(language === 'ru' ? VK_OPEN_API : DISFORA_SCRIPT).then((loaded) => {
                if (!loaded || cancelled || language !== 'ru') {
                    return;
                }
                /* eslint-disable @typescript-eslint/ban-ts-comment */
                // @ts-ignore-start
                VK.init({ apiId: 6456413, onlyWidgets: true, lang: language });
                // @ts-ignore
                VK.Widgets.Comments('vk_comments', { limit: 5, attach: '*' });
                /* eslint-enable @typescript-eslint/ban-ts-comment */
            });
        }
        return () => {
            cancelled = true;
        };
    }, [injectWidget, language]);

    // Следим за приближением к блоку комментариев, затем отключаем наблюдение.
    useEffect(() => {
        if (!commentsRef.current) {
            return;
        }
        if (injectWidget) {
            return;
        }
        const loaderObserver = elementObserver({
            element: commentsRef.current,
            onShow: onShowLoader,
            rootMargin: '0px 0px 500px 0px',
        });
        return () => {
            loaderObserver.stopObserverving();
        };
    }, [onShowLoader, injectWidget]);

    return (
        <div className="comments" ref={commentsRef}>
            {language === 'ru' ? <div id="vk_comments" /> : injectWidget && <div data-disfora-comments="" />}
        </div>
    );
};

export default memo(Comments);
