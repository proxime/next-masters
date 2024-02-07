import { Product, type ProductType } from "@/components/molecules/Product";

const products: ProductType[] = [
    {
        id: "1",
        title: "Buty do biegania",
        price: 899.99,
        image: "/adidas-by-stella-mccartney-ultraboost-speed.avif",
        color: "Różowy",
    },
    {
        id: "2",
        title: "Stylowe buty",
        price: 169,
        image: "/buty-terrex-soulstride-ultra-trail-running.avif",
        color: "Pomarańczowy",
    },
    {
        id: "3",
        title: "Buty do kośćioła",
        price: 599,
        image: "/solarglide-6-shoes.avif",
        color: "Czarny",
    },
    {
        id: "4",
        title: "Buty na spacer",
        price: 400,
        image: "/buty-terrex-soulstride-ultra-trail-running.avif",
        color: "Czerwony",
    },
];

export const ProductList = () => {
    return (
        <ul
            className="mt-6 grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-2 lg:grid-cols-4"
            data-testid="products-list"
        >
            {products.map((product) => (
                <Product key={product.id} {...product} />
            ))}
        </ul>
    );
};
