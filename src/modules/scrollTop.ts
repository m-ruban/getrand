const scrollEasing = (time: number) => {
    if (time < 0.5) {
        return 4 * time * time * time;
    }
    return (time - 1) * (2 * time - 2) * (2 * time - 2) + 1;
};

interface ScrollTopParams {
    top: number;
    speed?: number;
    animationStartCallback?: () => void;
    animationEndCallback?: () => void;
}

export default ({ top, speed = 500, animationStartCallback, animationEndCallback }: ScrollTopParams): void => {
    // calc distance
    const startLocation = window.pageYOffset;
    const endLocation = Math.round(top);
    const distance = endLocation - startLocation;
    const scrollSpeed = Math.abs((distance / 1000) * speed);

    // detect stop callback
    const documentHeight = document.body.scrollHeight;
    const start = performance.now();
    const endLocationReached = (position: number) => {
        const currentLocation = window.pageYOffset;
        return (
            position === endLocation ||
            currentLocation === endLocation ||
            (startLocation < endLocation && window.innerHeight + currentLocation) >= documentHeight
        );
    };

    const scrollAnimationLoop = () => {
        // start scroll
        const timeLapsed = performance.now() - start;
        const percentage = Math.min(timeLapsed / scrollSpeed, 1);
        const position = Math.round(startLocation + distance * scrollEasing(percentage));
        window.scrollTo(0, position);

        // start callback
        animationStartCallback && animationStartCallback();

        // try stop detect
        const stopLoop = endLocationReached(position);
        if (stopLoop) {
            animationEndCallback && animationEndCallback();
            return;
        }
        window.requestAnimationFrame(scrollAnimationLoop);
    };

    window.requestAnimationFrame(scrollAnimationLoop);
};
