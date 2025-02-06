import Link from "next/link";

const ButtonPrimary = ({ url, buttonSecondary }) => {
  if (!url) return null;
  const bgColor = buttonSecondary ? buttonSecondary : "white";

  return (
    <Link
      href={url}
      target="_blank"
      className={`px-8 py-4 border-2 transition  ${
        buttonSecondary
          ? `text-secondary border-secondary hover:bg-secondary hover:text-white`
          : "text-white border-white hover:bg-white hover:text-primary"
      }`}
    >
      <div className="underline font-semibold">Scopri di più</div>
    </Link>
  );
};

export default ButtonPrimary;
