import { executeGraphQL } from "@/utils/executeGraphQL";
import { ProductsListDocument } from "@/graphql/generated/graphql";

export const PRODCUTS_PAGE_SIZE = 8;

export const getProducts = async (page: number, search?: string) => {
    try {
        const data = await executeGraphQL({
            query: ProductsListDocument,
            variables: {
                skip: (page - 1) * PRODCUTS_PAGE_SIZE,
                take: PRODCUTS_PAGE_SIZE,
                search,
            },
        });

        return { products: data.products };
    } catch (error) {
        return { products: null, error };
    }
};
