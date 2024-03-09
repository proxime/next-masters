import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/utils/helpers";
import { type SingleProductFragment } from "@/graphql/generated/graphql";

export const Product = ({ images, price, name, categories, id, rating }: SingleProductFragment) => {
    return (
        <li className="group relative">
            <Link href={`/product/${id}`}>
                <div className="w-full overflow-hidden border-2 border-gray-100 bg-white p-2 group-hover:opacity-75">
                    <div className="aspect-h-1 aspect-w-1">
                        <Image
                            src={images[0]?.url}
                            alt={name}
                            className="h-full w-full object-contain object-center"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
                <div className="mt-4 flex justify-between">
                    <h3 className="text-sm text-gray-700">Rating</h3>
                    <p className="mt-1 text-sm text-gray-500" data-testid="product-rating">
                        {rating?.toFixed(2)}
                    </p>
                </div>
                <div className="flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{categories[0]?.name}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900" data-testid="product-price">
                        {formatPrice(price)}
                    </p>
                </div>
            </Link>
        </li>
    );
};
