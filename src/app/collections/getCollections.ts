import { executeGraphQL } from "@/utils/executeGraphQL";
import { CollectionsListDocument } from "@/graphql/generated/graphql";

export const getCollections = async () => {
    try {
        const data = await executeGraphQL({
            query: CollectionsListDocument,
            variables: {
                skip: 0,
                take: 10,
            },
        });

        return { collections: data.collections };
    } catch (error) {
        return { collections: null, error };
    }
};
