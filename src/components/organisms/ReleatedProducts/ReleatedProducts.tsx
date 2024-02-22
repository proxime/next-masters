import { getReleatedProducts } from "@/components/organisms/ReleatedProducts/getReleatedProducts";
import { ProductList } from "@components/organisms/ProductList";

export const ReleatedProducts = async () => {
    const { products } = await getReleatedProducts();
    if (!products) return null;

    return (
        <section data-testid="related-products">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Releated products
            </h2>
            <ProductList products={products.data} />
        </section>
    );
};
