import { sendGTMEvent } from "@next/third-parties/google";
import { FaWhatsapp } from "react-icons/fa";

export const WhatsappFloatingbutton = () => {
  const onClick = () => {
    sendGTMEvent({event: 'contact_click'});
  };
  const sampleText = 'Olá, gostaria de marcar uma consulta';
  return (
  <a className="w-14 h-14 fixed bottom bg-[#25d366] rounded-full flex cursor-pointer right-[16px] bottom-[16px]" href={`https://wa.me/351919113188?text=${sampleText}`} target="_blank" onClick={onClick}>
    <FaWhatsapp className="w-14 h-14 p-2"/>
    </a>
    )
};
