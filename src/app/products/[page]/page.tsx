import { notFound } from "next/navigation";
import { PRODCUTS_PAGE_SIZE, getProducts } from "@/app/products/[page]/getProducts";
import { Pagination } from "@/components/molecules/Pagination";
import { ProductList } from "@components/organisms/ProductList";

interface ProductsPageProps {
    params: {
        page?: string;
    };
}

export async function generateStaticParams() {
    return Array.from({ length: 2 }).map((_, i) => ({ page: `${i + 1}` }));
}

export default async function ProductsPage({ params: { page } }: ProductsPageProps) {
    const pageNumber = page ? parseInt(page, 10) : 1;

    const { products } = await getProducts(pageNumber);
    if (!products) return notFound();

    return (
        <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <ProductList products={products.data} />
            <Pagination
                totalCount={products.meta.total}
                pageSize={PRODCUTS_PAGE_SIZE}
                path="/products"
            />
        </main>
    );
}
