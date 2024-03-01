import Image from "next/image";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { formatPrice } from "@/utils/helpers";
import { getProductById } from "@/app/product/[productId]/getProductById";
import { ReleatedProducts } from "@/components/organisms/ReleatedProducts/ReleatedProducts";

interface ProductPageProps {
    params: {
        productId: string;
    };
}

export async function generateMetadata({
    params,
}: {
    params: { productId: string };
}): Promise<Metadata> {
    const { product } = await getProductById(params.productId);

    return {
        title: product?.name || "",
        description: product?.description || "",
    };
}

export default async function ProductPage({ params: { productId } }: ProductPageProps) {
    const { product } = await getProductById(productId);
    if (!product) return notFound();

    return (
        <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="bg-white">
                <div className="pt-6 lg:flex">
                    <div className="mx-auto mt-6 max-w-2xl sm:px-6">
                        <div className="aspect-1 overflow-hidden rounded-lg border-2 border-gray-100 p-2">
                            <Image
                                src={product.images?.[0]?.url}
                                alt={product.name}
                                className="h-full w-full object-contain object-center"
                                width={600}
                                height={600}
                            />
                        </div>
                    </div>

                    {/* Product info */}
                    <div className="mx-auto px-4 pb-16 pt-10 sm:px-6 lg:w-[480px] lg:px-8 lg:pb-24 lg:pt-16 xl:w-[600px]">
                        <div className="flex justify-between gap-x-6">
                            <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                {product.name}
                            </h1>
                            <p className="text-lg tracking-tight text-gray-900">
                                {formatPrice(product.price)}
                            </p>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>

                            <form className="mt-10">
                                {/* Colors */}
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900">Category</h3>
                                    <p className="text-lg font-medium text-black">
                                        {product.categories[0]?.name}
                                    </p>
                                </div>

                                <button
                                    type="submit"
                                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Add to cart
                                </button>
                            </form>
                        </div>

                        <div className="py-10 ">
                            <p className="text-base text-gray-900">Description</p>

                            <div className="mt-2">
                                <p className="text-base text-gray-700">{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Suspense>
                <div className="mt-24">
                    <ReleatedProducts />
                </div>
            </Suspense>
        </main>
    );
}
