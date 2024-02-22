import { notFound } from "next/navigation";
import { getCategoryProducts } from "@/app/categories/[name]/[page]/getCategoryProducts";
import { ProductList } from "@/components/organisms/ProductList";

interface CategoriesPageProps {
    params: {
        name: string;
        page: string;
    };
}

export default async function CategoriesPage({ params: { name } }: CategoriesPageProps) {
    const { category } = await getCategoryProducts(name);
    if (!category) return notFound();

    return (
        <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <ProductList products={category.products} />
        </main>
    );
}
