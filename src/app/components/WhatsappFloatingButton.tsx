import { FaWhatsapp } from "react-icons/fa";

export const WhatsappFloatingbutton = () => {
  const sampleText = 'Olá, gostaria de marcar uma consulta';
  return (
  <a className="w-14 h-14 absolute bottom bg-[#25d366] rounded-full flex cursor-pointer right-[64px] bottom-[64px] sm:right-[64px] sm:bottom-[64px]" href={`https://wa.me/351919113188?text=${sampleText}`} target="_blank">
    <FaWhatsapp className="w-14 h-14 p-2"/>
    </a>
    )
};
