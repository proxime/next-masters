import Image from "next/image";
import { formatPrice } from "@/utils/helpers";

export type ProductType = {
    id: string;
    title: string;
    price: number;
    image: string;
    color: string;
};

type ProductProps = ProductType;

export const Product = ({ image, price, title, color }: ProductProps) => {
    return (
        <li className="group relative">
            <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                <Image
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    width={400}
                    height={400}
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{formatPrice(price)}</p>
            </div>
        </li>
    );
};
