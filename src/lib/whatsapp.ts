import { whatsappNumber } from "../data/site";

export function whatsappUrl(text: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}
