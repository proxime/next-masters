import { executeGraphQL } from "@/utils/executeGraphQL";
import { CollectionProductsDocument } from "@/graphql/generated/graphql";

export const getCollectionProducts = async (slug: string) => {
    try {
        const data = await executeGraphQL({
            query: CollectionProductsDocument,
            variables: {
                slug,
            },
        });

        return { collection: data.collection };
    } catch (error) {
        return { collection: null, error };
    }
};
