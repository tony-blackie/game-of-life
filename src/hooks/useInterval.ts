import { useRef, useEffect } from 'react';

type VoidFunc = () => void;

const useInterval = (callback: VoidFunc, delay: number) => {
    const savedCallback = useRef<VoidFunc | undefined>();

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        const tick = () => {
            if (savedCallback.current) {
                savedCallback.current();
            }
        };

        let interval = setInterval(tick, delay);

        return () => {
            clearInterval(interval);
        };
    }, [delay]);
};

export default useInterval;
