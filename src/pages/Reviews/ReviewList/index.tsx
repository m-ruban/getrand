import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootStore } from 'models/reducers';

import elementObserver from 'modules/elementObserver';

import ColumnContainer from 'components/ColumnContainer';
import Loader from 'components/Loader';
import SectionHeader from 'components/SectionHeader';

import Stream from 'pages/Reviews/ReviewList/Stream';

const DEFAULT_LIST = [];

const ReviewList: FC = () => {
    const reviewList = useSelector((state: RootStore) => state.reviews);
    const defaultPage = useSelector((state: RootStore) => state.matchedParams.page || '1');

    const loaderRef = useRef<HTMLDivElement>(null);
    const [pages, setPages] = useState<number[]>([Number(defaultPage)]);
    const [enableLoadStreams, setEnableLoadStreams] = useState<boolean>(true);

    const disableLoadStreams = useCallback(() => {
        setEnableLoadStreams(false);
    }, []);

    const onShowLoader = useCallback(() => {
        setPages((pages) => {
            const last = pages[pages.length - 1];
            return [...pages, last + 1];
        });
    }, []);

    useEffect(() => {
        if (!loaderRef.current || !enableLoadStreams) {
            return;
        }
        const loaderObserver = elementObserver({
            element: loaderRef.current,
            onShow: onShowLoader,
            rootMargin: '0px 0px 500px 0px',
        });
        return () => {
            // because loader down to bottom
            loaderObserver.stopObserverving();
        };
    }, [onShowLoader, enableLoadStreams]);

    return (
        <>
            <SectionHeader title="Обзоры игр" combineColor />
            <ColumnContainer>
                {pages.map((page, index) => {
                    return (
                        <Stream
                            key={page}
                            page={page}
                            defaultList={index === 0 ? reviewList : DEFAULT_LIST}
                            disableLoadStreams={disableLoadStreams}
                        />
                    );
                })}
                <div ref={loaderRef}>{enableLoadStreams && <Loader />}</div>
            </ColumnContainer>
        </>
    );
};

export default ReviewList;
