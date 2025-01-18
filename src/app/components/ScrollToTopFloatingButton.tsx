'use client'
import { useIsScroll } from "@/app/hooks/use-is-scroll";
import { Button } from "@material-tailwind/react";
import { FaChevronUp } from "react-icons/fa";

export const ScrollToTopFloatingButton = () => {
  const isScroll = useIsScroll();
  const onClick = () => {
    window.scrollTo(0, 0);
  }
  if (!isScroll) {
    return null;
  }

  return (
    <Button variant="filled" className="w-14 h-14 rounded-full relative shadow-none" color="indigo" onClick={onClick}>
      <FaChevronUp className="w-6 h-6 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"/>
    </Button>
  )
};
