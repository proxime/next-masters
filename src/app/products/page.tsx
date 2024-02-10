import { type ProductType } from "@/@types/products";
import { Pagination } from "@/components/molecules/Pagination";
import { ProductList } from "@components/organisms/ProductList";

const PAGE_SIZE = 20;

export default async function ProductsPage() {
    const products = (await fetch(
        `https://naszsklep-api.vercel.app/api/products?take=${PAGE_SIZE}}`,
    ).then((res) => res.json())) as ProductType[];

    return (
        <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <ProductList products={products} />
            <Pagination totalCount={100} pageSize={PAGE_SIZE} path="/products" />
        </main>
    );
}
