export interface ElementObserver {
    startObserverving: () => void;
    stopObserverving: () => void;
}

interface ElementObserverProps {
    element: HTMLElement;
    onShow?: () => void;
    onHide?: () => void;
    rootMargin?: string;
}

const elementObserver = ({ element, onShow, onHide, rootMargin }: ElementObserverProps): ElementObserver => {
    // try track element
    let lastInViewport: boolean;
    const trackElement: IntersectionObserverCallback = (entries) => {
        const entry = entries[0];
        const currentlyInViewport = entry.isIntersecting;
        if (currentlyInViewport === lastInViewport) {
            return;
        }
        if (currentlyInViewport) {
            onShow && onShow();
        } else {
            onHide && onHide();
        }
        lastInViewport = currentlyInViewport;
    };

    // create instance
    const observer: IntersectionObserver = new IntersectionObserver(trackElement, {
        threshold: [0, 1],
        rootMargin,
    });

    // callbacks
    const startObserverving = () => {
        lastInViewport = false;
        observer.observe(element);
    };
    const stopObserverving = () => {
        observer.disconnect();
    };
    startObserverving();

    return {
        startObserverving,
        stopObserverving,
    };
};

export default elementObserver;
