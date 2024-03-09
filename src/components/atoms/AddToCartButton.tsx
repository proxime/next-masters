"use client";

import { addProductToCartAction } from "@/app/api/cart";

interface AddToCartButtonProps {
    productId: string;
}

export const AddToCartButton = ({ productId }: AddToCartButtonProps) => {
    return (
        <button
            onClick={() => addProductToCartAction(productId)}
            data-testid="add-to-cart-button"
            type="button"
            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
            Add to cart
        </button>
    );
};
