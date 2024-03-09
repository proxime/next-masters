import { executeGraphQL } from "@/utils/executeGraphQL";
import { ProductReviewsDocument } from "@/graphql/generated/graphql";

export const getReviews = async (productId: string) => {
    try {
        const data = await executeGraphQL({
            query: ProductReviewsDocument,
            variables: { id: productId },
            next: {
                tags: ["reviews"],
            },
        });

        return { reviews: data.product?.reviews || [] };
    } catch (error) {
        return { reviews: null, error };
    }
};
