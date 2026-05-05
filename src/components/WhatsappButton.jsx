import WhatsAppIcon from "../icons/WhatsAppIcon";

const WHATSAPP = "5511991517114";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-fab"
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}