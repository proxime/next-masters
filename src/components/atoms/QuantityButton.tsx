"use client";

import { useOptimistic } from "react";
import { changeItemQuantity } from "@/app/cart/actions";

interface QuantityButtonProps {
    cartId: string;
    itemId: string;
    quantity: number;
}

export const QuantityButton = ({ cartId, itemId, quantity }: QuantityButtonProps) => {
    const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
        quantity,
        (_currentState, optimisticValue: number) => optimisticValue,
    );

    return (
        <form className="flex">
            <div className="relative flex items-center pt-1">
                <button
                    className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-sm border-0 bg-gray-700 hover:bg-purple-700 focus:outline-none disabled:bg-gray-400"
                    data-testid="decrement"
                    disabled={optimisticQuantity === 1}
                    formAction={async () => {
                        setOptimisticQuantity(optimisticQuantity - 1);
                        await changeItemQuantity(cartId, itemId, optimisticQuantity - 1);
                    }}
                >
                    <svg
                        className="h-2 w-2 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h16"
                        />
                    </svg>
                </button>
                <div className={"flex w-16 justify-center gap-x-1 text-gray-700"}>
                    <span data-testid={"quantity"}>{optimisticQuantity}</span> elem.
                </div>
                <button
                    className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-sm border-0 bg-gray-700 hover:bg-purple-700 focus:outline-none"
                    data-testid="increment"
                    formAction={async () => {
                        setOptimisticQuantity(optimisticQuantity + 1);
                        await changeItemQuantity(cartId, itemId, optimisticQuantity + 1);
                    }}
                >
                    <svg
                        className="h-2 w-2 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 1v16M1 9h16"
                        />
                    </svg>
                </button>
            </div>
        </form>
    );
};
