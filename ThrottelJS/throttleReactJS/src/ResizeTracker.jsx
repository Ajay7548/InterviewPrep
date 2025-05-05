import { useEffect, useState } from "react";

// Throttle function to limit the frequency of function calls
function throttle(func, limit) {
    let lastCall = 0;
    return (...args) => {
        const now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            func(...args);
        }
    };
}

// ResizeTracker component to track window width
const ResizeTracker = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Throttled resize handler
        const handleResize = throttle(() => {
            setWidth(window.innerWidth);
        }, 300); // Only allow resize updates every 300ms

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener when the component unmounts
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <div>Window Width: {width}px</div>;
};

export default ResizeTracker

// ResizeTracker component to track window height
// const ScrollTracker = () => {
//     const [scrollY, setScrollY] = useState(window.scrollY);

//     useEffect(() => {
//         const handleScroll = throttle(() => {
//             setScrollY(window.scrollY);
//         }, 200); // Update every 200ms

//         window.addEventListener('scroll', handleScroll);

//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return <div>Scroll Position (Y): {scrollY.toFixed(0)}px</div>;
// };

// export default ScrollTracker;
