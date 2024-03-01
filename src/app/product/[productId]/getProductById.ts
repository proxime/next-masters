import { executeGraphQL } from "@/utils/executeGraphQL";
import { ProductByIdDocument } from "@/graphql/generated/graphql";

export const getProductById = async (productId: string) => {
    try {
        const data = await executeGraphQL({
            query: ProductByIdDocument,
            variables: { id: productId },
        });

        return { product: data.product };
    } catch (error) {
        return { product: null, error };
    }
};
