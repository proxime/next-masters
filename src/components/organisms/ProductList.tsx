import { OrderSelect, type OrderSelectProps } from "@/components/molecules/OrderSelect";
import { Product } from "@/components/molecules/Product";
import { type SingleProductFragment } from "@/graphql/generated/graphql";

interface ProductListProps {
    products: SingleProductFragment[];
    orderSelect?: OrderSelectProps;
}

export const ProductList = ({ products, orderSelect }: ProductListProps) => {
    return (
        <div>
            {orderSelect && <OrderSelect {...orderSelect} />}
            <ul
                className="mt-6 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4"
                data-testid="products-list"
            >
                {products.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </ul>
        </div>
    );
};
