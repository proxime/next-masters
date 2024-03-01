import { redirect } from "next/navigation";
import { getProducts } from "@/app/products/[page]/getProducts";
import { ProductList } from "@components/organisms/ProductList";

interface SearchPageProps {
    searchParams: {
        query?: string;
    };
}

export default async function SearchPage({ searchParams: { query } }: SearchPageProps) {
    if (!query) return redirect("/");
    const { products } = await getProducts(1, query);

    if (!products?.data.length)
        return (
            <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="mx-auto text-center text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    Products not found
                </h2>
            </main>
        );

    return (
        <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <ProductList products={products.data} />
        </main>
    );
}
