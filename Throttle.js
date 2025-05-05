//Window Resize
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

const ResizeTracker = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleResize = throttle(() => {
            setWidth(window.innerWidth);
        }, 300);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <div>Window Width: {width}px</div>;
}



//Scrollbar 
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

const ScrollTracker = () => {
    const [position, setPosition] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = throttle(() => {
            setPosition(window.scrollY);
        }, 200);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <div>Scroll Y Position: {position}px</div>;
}
