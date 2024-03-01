import { notFound } from "next/navigation";
import { getProducts } from "@/app/products/[page]/getProducts";
import { ProductList } from "@components/organisms/ProductList";

export default async function ProductsPage() {
    const { products } = await getProducts(1);
    if (!products) return notFound();

    return (
        <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <ProductList products={products.data} />
        </main>
    );
}
