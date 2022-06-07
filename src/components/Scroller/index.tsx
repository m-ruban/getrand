import React, { FC, MouseEvent, ReactNode, useCallback, useRef } from 'react';

import 'components/Scroller/scroller.less';

const SLIDE_SPEED = 1.2;

interface ScrollerProps {
    children: ReactNode;
}

const Scroller: FC<ScrollerProps> = ({ children }) => {
    const list = useRef<HTMLDivElement>(null);
    const down = useRef<boolean>(false);
    const start = useRef<number>(0);
    const left = useRef<number>(0);

    const onMouseDown = useCallback((e: MouseEvent<HTMLDivElement>) => {
        down.current = true;
        start.current = e.pageX - list.current.offsetLeft;
        left.current = list.current.scrollLeft;
        list.current.classList.add('scroller_active');
    }, []);

    const onMouseLeaveOrUp = useCallback(() => {
        down.current = false;
        list.current.classList.remove('scroller_active');
    }, []);

    const onMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
        if (!down.current) {
            return;
        }
        e.preventDefault();
        const x = e.pageX - list.current.offsetLeft;
        list.current.scrollLeft = left.current - (x - start.current) * SLIDE_SPEED;
    }, []);

    return (
        <div
            ref={list}
            className="scroller"
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeaveOrUp}
            onMouseUp={onMouseLeaveOrUp}
            onMouseMove={onMouseMove}
        >
            {children}
        </div>
    );
};

export default Scroller;
