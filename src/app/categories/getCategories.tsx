import { executeGraphQL } from "@/utils/executeGraphQL";
import { CategoriesListDocument } from "@/graphql/generated/graphql";

export const getCategories = async () => {
    try {
        const data = await executeGraphQL({
            query: CategoriesListDocument,
            variables: {
                skip: 0,
                take: 10,
            },
        });

        return { categories: data.categories };
    } catch (error) {
        return { categories: null, error };
    }
};
