import { RelatedProductsDocument } from "@/graphql/generated/graphql";
import { executeGraphQL } from "@/utils/executeGraphQL";

export const getReleatedProducts = async () => {
    try {
        const data = await executeGraphQL({
            query: RelatedProductsDocument,
        });

        return { products: data.products };
    } catch (error) {
        return { products: null, error };
    }
};
