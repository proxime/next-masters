import { executeGraphQL } from "@/utils/executeGraphQL";
import { CategoryProductsDocument } from "@/graphql/generated/graphql";

export const getCategoryProducts = async (slug: string) => {
    try {
        const data = await executeGraphQL({
            query: CategoryProductsDocument,
            variables: {
                slug,
            },
        });

        return { category: data.category };
    } catch (error) {
        return { category: null, error };
    }
};
