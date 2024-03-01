"use client";

import { useController, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { addReviewAction } from "./addReviewAction";
import { RatingStars } from "@/components/molecules/RatingStars/RatingStars";

interface ReviewFormProps {
    productId: string;
}

export const ReviewForm = ({ productId }: ReviewFormProps) => {
    const [loading, setLoading] = useState(false);

    const { handleSubmit, register, control, reset } = useForm<ReviewFormValues>({
        mode: "onTouched",
        resolver: yupResolver(ReviewFormSchema),
    });

    const ratingField = useController({
        control,
        name: "rating",
        defaultValue: 5,
    }).field;

    const handleFormSubmit = handleSubmit(async (formData) => {
        try {
            setLoading(true);
            await addReviewAction(formData, productId);
            reset();
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    });

    return (
        <form onSubmit={handleFormSubmit} data-testid="add-review-form">
            <div className="mb-5">
                <label
                    htmlFor="headline"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                    Headline
                </label>
                <input
                    {...register("title")}
                    id="headline"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Enter headline"
                />
            </div>
            <div className="mb-5">
                <label
                    htmlFor="content"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                    Content
                </label>
                <textarea
                    {...register("description")}
                    id="content"
                    className="block w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Enter content"
                    rows={4}
                />
            </div>
            <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Rate
                </label>
                <RatingStars count={5} onChange={ratingField.onChange} value={ratingField.value} />
            </div>
            <div className="mb-5">
                <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                    Your Name
                </label>
                <input
                    {...register("author")}
                    id="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Enter your Name"
                />
            </div>
            <div className="mb-5">
                <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                    Your email
                </label>
                <input
                    {...register("email")}
                    id="email"
                    type="email"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Enter your email"
                />
            </div>

            <button
                disabled={loading}
                type="submit"
                className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit review
            </button>
        </form>
    );
};

const ReviewFormSchema = yup.object({
    title: yup.string().required("Enter headline"),
    description: yup.string().required("Enter content"),
    rating: yup.number().required("Enter rating"),
    author: yup.string().required("Enter your name"),
    email: yup.string().email("Email is invalid").required("Enter your email"),
});

export type ReviewFormValues = yup.InferType<typeof ReviewFormSchema>;
