'use client';
import { MESSAGE, PHONE_NUMBER } from "@/app/constants";
import { FaWhatsapp } from "react-icons/fa";

export const WhatsappFloatingbutton = () => {
  const onClick = () => {
  };

  return (
  <a className="w-14 h-14 bg-[#25d366] rounded-full flex cursor-pointer" href={`https://wa.me/${PHONE_NUMBER}?text=${MESSAGE}`} target="_blank" onClick={onClick}>
    <FaWhatsapp className="w-14 h-14 p-2"/>
    </a>
    )
};
