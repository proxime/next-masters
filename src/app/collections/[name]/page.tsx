import { notFound } from "next/navigation";
import { getCollectionProducts } from "@/app/collections/[name]/getCollectionProducts";
import { ProductList } from "@/components/organisms/ProductList";

interface CategoriesPageProps {
    params: {
        name: string;
    };
}

export default async function CollectionsPage({ params: { name } }: CategoriesPageProps) {
    const { collection } = await getCollectionProducts(name);
    if (!collection) return notFound();

    return (
        <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <ProductList products={collection.products} />
        </main>
    );
}
