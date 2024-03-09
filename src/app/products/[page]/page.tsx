import { notFound } from "next/navigation";
import { PRODCUTS_PAGE_SIZE, getProducts } from "@/app/products/[page]/getProducts";
import { Pagination } from "@/components/molecules/Pagination";
import { ProductList } from "@components/organisms/ProductList";
import { type ProductSortBy, type SortDirection } from "@/graphql/generated/graphql";

interface ProductsPageProps {
    params: {
        page?: string;
    };
    searchParams: {
        orderBy: ProductSortBy;
        order: SortDirection;
    };
}

export async function generateStaticParams() {
    return Array.from({ length: 2 }).map((_, i) => ({ page: `${i + 1}` }));
}

export default async function ProductsPage({ params: { page }, searchParams }: ProductsPageProps) {
    const pageNumber = page ? parseInt(page, 10) : 1;

    const { products } = await getProducts(pageNumber, undefined, searchParams);
    if (!products) return notFound();

    return (
        <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <ProductList products={products.data} orderSelect={{ route: `/products` }} />
            <Pagination
                totalCount={products.meta.total}
                pageSize={PRODCUTS_PAGE_SIZE}
                path="/products"
            />
        </main>
    );
}
