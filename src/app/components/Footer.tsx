export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="h-14 bg-gray-900 text-xs text-center flex flex-col justify-center">
      <p>
        © {year} Magia e Tarot. Todos os direitos reservados.
      </p>
      <p>
        Desenvolvido por AFR Computing.
      </p>
    </footer>
  )
};
