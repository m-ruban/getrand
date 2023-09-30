import React, { FC, useEffect, useState } from 'react';
import classnames from 'classnames';

import Button, { ButtonKind } from 'gg-ukit/components/Button';
import ArrowUpAlt2 from 'gg-ukit/components/Icon/ArrowUpAlt2';
import Colors from 'gg-ukit/modules/colors';

import scrollTop from 'modules/scrollTop';
import throttle from 'modules/throttle';

import './scroll-to-top.less';

const SCROLL_THROTTLE_DELAY_MS = 100;
const SCROLL_TO_TOP_SPEED_MS = 150;
const CHECKPOINT_SHOW_BUTTON_RATIO = 0.5;

const ScrollToTop: FC = () => {
    const [shown, setShown] = useState<boolean>(false);
    const [isScrollingToTop, setIsScrollingToTop] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = throttle(
            () => setShown(!isScrollingToTop && window.scrollY > CHECKPOINT_SHOW_BUTTON_RATIO * window.innerHeight),
            SCROLL_THROTTLE_DELAY_MS
        );
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrollingToTop]);

    const handleClick = () => {
        const isPrefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const scrollToTopSpeed = isPrefersReducedMotion ? 0 : SCROLL_TO_TOP_SPEED_MS;
        scrollTop({
            top: 0,
            speed: scrollToTopSpeed,
            animationStartCallback: () => {
                setIsScrollingToTop(true);
            },
            animationEndCallback: () => {
                setIsScrollingToTop(false);
            },
        });
        setShown(false);
    };

    return (
        <div
            className={classnames('scroll-to-top', {
                'scroll-to-top_shown': shown,
            })}
        >
            <Button
                kind={ButtonKind.Promo}
                onClick={handleClick}
                icon={<ArrowUpAlt2 color={Colors.Secondary} />}
                rounded
            />
        </div>
    );
};

export default ScrollToTop;
