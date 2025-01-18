import { useEffect, useState } from "react";

export const useIsScroll = () => {
  const [isScroll, setIsScroll] = useState(false);


    const listenToScroll = () => {
      setIsScroll(window.scrollY > 10);
    }
    useEffect(() => {
      window.addEventListener('scroll', listenToScroll);
  
      return () => {
        window.removeEventListener('scroll', listenToScroll);
      };
    }, []);

  return isScroll;
};
