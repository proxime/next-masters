import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/utils/helpers";
import { type ProductType } from "@/@types/products";

export const Product = ({ image, price, title, category, id }: ProductType) => {
    return (
        <li className="group relative">
            <Link href={`/product/${id}`}>
                <div className="w-full overflow-hidden border-2 border-gray-100 bg-white p-2 group-hover:opacity-75">
                    <div className="aspect-h-1 aspect-w-1">
                        <Image
                            src={image}
                            alt={title}
                            className="h-full w-full object-contain object-center"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{category}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{formatPrice(price)}</p>
                </div>
            </Link>
        </li>
    );
};
