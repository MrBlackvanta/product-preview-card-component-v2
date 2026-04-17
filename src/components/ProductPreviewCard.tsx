import { CartSVG } from "assets/icons";
import { productPreviewCardData } from "data";

export default function ProductPreviewCard() {
  const { image, category, title, description, price } = productPreviewCardData;
  return (
    <figure className="flex flex-col overflow-hidden rounded-lg bg-white md:flex-row">
      <picture className="md:w-1/2">
        <source srcSet={image.desktop} media="(min-width: 768px)" />
        <img
          src={image.mobile}
          alt={title}
          className="h-full w-full object-cover"
        />
      </picture>
      <figcaption className="text-grey grid gap-6 p-8 md:w-1/2">
        <p className="text-preset-4">{category}</p>
        <h1 className="text-preset-1 text-black">{title}</h1>
        <p className="text-preset-3">{description}</p>
        <div className="flex items-center gap-4">
          <span className="text-preset-1 text-green-500">${price.current}</span>
          <span className="text-preset-5 text-grey line-through">
            ${price.original}
          </span>
        </div>
        <button className="text-preset-2 flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-green-500 p-[17.5px] text-white transition-colors duration-300 hover:bg-green-700">
          <CartSVG className="size-4.5" />
          Add to Cart
        </button>
      </figcaption>
    </figure>
  );
}
