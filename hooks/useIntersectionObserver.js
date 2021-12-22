import { useState, useEffect, useRef } from 'react';

export default function useIntersectionObserver({ distance = '50px'}) {
    const [isNearScreen, setIsNearScreen] = useState(false);
    const ref = useRef(null);
    
    useEffect(() => {
        if(typeof window === 'undefined') return;
        console.log('ref is', ref)
        const chages = (entries, observer) => {
            if(entries[0].isIntersecting) {
                console.log('here down')
                setIsNearScreen(true);
                // observer.disconnect()
            } else {
                setIsNearScreen(false);
            }
        }

        const observer = new IntersectionObserver(chages, {
            root: null,
            rootMargin: distance,
        });
        observer.observe(ref.current);

        return () => observer && observer.disconnect();
    }, [isNearScreen])
    
    return [ref, isNearScreen];
}
