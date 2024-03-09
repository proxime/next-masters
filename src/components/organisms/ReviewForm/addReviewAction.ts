"use server";

import { revalidateTag } from "next/cache";
import { type ReviewFormValues } from "@/components/organisms/ReviewForm/ReviewForm";
import { CreateReviewDocument } from "@/graphql/generated/graphql";
import { executeGraphQL } from "@/utils/executeGraphQL";

export const addReviewAction = async (formData: ReviewFormValues, productId: string) => {
    await executeGraphQL({
        query: CreateReviewDocument,
        variables: {
            ...formData,
            productId,
        },
    });

    revalidateTag("reviews");
};
