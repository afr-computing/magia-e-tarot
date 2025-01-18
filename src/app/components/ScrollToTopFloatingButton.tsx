'use client'
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

export const ScrollToTopFloatingButton = () => {
  const [showButton, setShowButton] = useState(false);
  const onClick = () => {
    window.scrollTo(0, 0);
  }

  const listenToScroll = () => {
    setShowButton(window.scrollY > 10);
    console.log(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);

    return () => {
      window.removeEventListener('scroll', listenToScroll);
    };
  }, []);
  if (!showButton) {
    return null;
  }

  return (
    <Button variant="filled" className="w-14 h-14 rounded-full relative shadow-none" color="indigo" onClick={onClick}>
      <FaChevronUp className="w-6 h-6 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"/>
    </Button>
  )
};
