import { useState, useEffect } from 'react';

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Funzione che controlla la dimensione della viewport
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Check iniziale
        checkMobile();

        // Aggiungi event listener per il resize
        window.addEventListener('resize', checkMobile);

        // Cleanup dell'event listener
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    return isMobile;
};

// Alternativa come helper function (non-React)
export const isMobile = () => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768;
};