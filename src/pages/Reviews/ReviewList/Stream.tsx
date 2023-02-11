import React, { FC, Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { ImageLoad } from 'gg-ukit/components/Image';

import { ArticleSearch } from 'models/lastReviews';
import { setPagination } from 'models/pagination';

import elementObserver from 'modules/elementObserver';

import ArticleDivider from 'components/ArticleDivider';
import ArticleSearchItem from 'components/ArticleSearchItem';

interface StreamProps {
    defaultList: ArticleSearch[];
    page: number;
    disableLoadStreams: () => void;
}

const LIMIT_ITEMS = 10;

const Stream: FC<StreamProps> = ({ defaultList, page, disableLoadStreams }) => {
    const dispatch = useDispatch();
    const ids = useRef<number[]>(defaultList.map(({ id }) => id));
    const streamRef = useRef<HTMLDivElement>(null);
    const [showStream, setShowStream] = useState<boolean>(true);
    const [list, setList] = useState<ArticleSearch[]>(defaultList);

    // set empty list and save height
    const onHideStream = useCallback(() => {
        streamRef.current.style.height = `${streamRef.current.offsetHeight}px`;
        setShowStream(false);
        setList([]);
    }, []);

    // load list by ids
    const onShowStream = useCallback(() => {
        if (showStream) {
            return;
        }
        const params = ids.current.map((id) => 'id=' + id).join('&');
        axios.get(`/shards/reviews-by-ids/?${params}`).then((response) => {
            const { articles } = response.data;
            setList(articles);
            setShowStream(true);
            streamRef.current.style.height = null;
        });
    }, [showStream]);

    // load data by page
    useEffect(() => {
        if (defaultList.length > 0) {
            return;
        }
        streamRef.current.style.height = '1000px';
        axios.get(`/shards/reviews/?page=${page}`).then((response) => {
            const { articles, pagination } = response.data;
            // save ids for loading
            ids.current = articles.map(({ id }) => id);
            setList(articles);
            // paginations need recalc (because change curr page)
            dispatch(setPagination(pagination));
            streamRef.current.style.height = null;
            if (articles.length < LIMIT_ITEMS) {
                // detect end of section
                disableLoadStreams();
            }
        });
    }, [defaultList, page, disableLoadStreams, dispatch]);

    // set observers
    useEffect(() => {
        if (!streamRef.current) {
            return;
        }
        const streamObserver = elementObserver({
            element: streamRef.current,
            onShow: onShowStream,
            onHide: onHideStream,
            rootMargin: '500px 0px 500px 0px',
        });
        return () => {
            // because callbacs recals
            streamObserver.stopObserverving();
        };
    }, [onHideStream, onShowStream]);

    return (
        <div ref={streamRef} className="stream">
            {showStream &&
                list.map(({ id, ...props }, index) => {
                    return (
                        <Fragment key={id}>
                            <ArticleSearchItem
                                type="review"
                                id={id}
                                {...props}
                                loading={index < 3 ? ImageLoad.Eager : ImageLoad.Lazy}
                                short
                            />
                            {index !== list.length - 1 && <ArticleDivider xsOnly />}
                        </Fragment>
                    );
                })}
        </div>
    );
};

export default Stream;
