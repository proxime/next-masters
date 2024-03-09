import { executeGraphQL } from "@/utils/executeGraphQL";
import {
    type ProductSortBy,
    ProductsListDocument,
    type SortDirection,
} from "@/graphql/generated/graphql";

export const PRODCUTS_PAGE_SIZE = 8;

export const getProducts = async (
    page: number,
    search?: string,
    filters?: {
        orderBy: ProductSortBy;
        order: SortDirection;
    },
) => {
    try {
        const data = await executeGraphQL({
            query: ProductsListDocument,
            variables: {
                skip: (page - 1) * PRODCUTS_PAGE_SIZE,
                take: PRODCUTS_PAGE_SIZE,
                search,
                orderBy: filters?.orderBy,
                order: filters?.order,
            },
        });

        return { products: data.products };
    } catch (error) {
        console.error("Error fetching products", error);
        return { products: null, error };
    }
};
