import desktop from "assets/images/image-product-desktop.jpg";
import mobile from "assets/images/image-product-mobile.jpg";
import type { ProductPreviewCardData } from "types";

export const productPreviewCardData: ProductPreviewCardData = {
  image: {
    mobile,
    desktop,
    alt: "Bottle of Gabrielle Essence perfume on pink background",
  },
  category: "perfume",
  title: "Gabrielle Essence Eau De Parfum",
  description:
    "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
  price: {
    current: 149.99,
    original: 169.99,
  },
};
