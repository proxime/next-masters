"use server";

import { revalidateTag } from "next/cache";
import { CreateReviewDocument } from "@/graphql/generated/graphql";
import { executeGraphQL } from "@/utils/executeGraphQL";

export const addReviewAction = async (
    formData: {
        author: string;
        description: string;
        email: string;
        rating: number;
        title: string;
    },
    productId: string,
) => {
    await executeGraphQL({
        query: CreateReviewDocument,
        variables: {
            ...formData,
            productId,
        },
    });

    revalidateTag("reviews");
};
