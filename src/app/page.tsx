import { ProductList } from "@components/organisms/ProductList";

export default function Home() {
    return (
        <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <ProductList />
        </main>
    );
}
