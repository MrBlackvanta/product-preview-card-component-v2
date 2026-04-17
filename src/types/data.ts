export type ProductPreviewCardData = {
  image: {
    mobile: string;
    desktop: string;
  };
  category: string;
  title: string;
  description: string;
  price: {
    current: number;
    original: number;
  };
};
