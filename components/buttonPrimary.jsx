import Link from "next/link";

const ButtonPrimary = ({ url, buttonSecondary, testo }) => {
  if (!url) return null;
  const bgColor = buttonSecondary ? buttonSecondary : "white";

  console.log("Testo ricevuto:", testo); // Debug

  // Determina il testo del bottone
  const buttonText = testo ? testo : "Scopri di più";

  return (
    <Link
      href={url}
      target="_blank"
      className={`px-8 py-4 border-2 transition ${buttonSecondary
          ? `text-secondary border-secondary hover:bg-secondary hover:text-white`
          : "text-white border-white hover:bg-white hover:text-primary"
        }`}
    >
      <div className="underline font-semibold">{buttonText}</div>
    </Link>
  );
};

export default ButtonPrimary;