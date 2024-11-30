import { useState, useEffect } from 'react';

export const useAspectRatio = () => {
  const [isTallerThan16By9, setIsTallerThan16By9] = useState(false);

  useEffect(() => {
    const checkAspectRatio = () => {
      const ratio = window.innerWidth / window.innerHeight;
      setIsTallerThan16By9(ratio > 16/9);
      console.log(ratio < 16/9)
    };

    checkAspectRatio();

    window.addEventListener('resize', checkAspectRatio);

    return () => {
      window.removeEventListener('resize', checkAspectRatio);
    };
  }, []);

  return isTallerThan16By9;
};