"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { type ProductSortBy } from "@/graphql/generated/graphql";

type PartialRecord<K extends string, T> = {
    [P in K]?: T;
};

const orderBySelect: PartialRecord<ProductSortBy, { text: string; testId?: string }> = {
    NAME: { text: "Name", testId: "sort-by-name" },
    PRICE: { text: "Price", testId: "sort-by-price" },
    RATING: { text: "Rating", testId: "sort-by-rating" },
    // AVERAGE_RATING: { text: "Average rating", testId: "sort-by-rating" },
};

export type OrderSelectProps = { route: string };

export const OrderSelect = ({ route }: OrderSelectProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const orderBy = searchParams.get("orderBy");
    const order = searchParams.get("order");

    return (
        <div className={"mb-6 ml-auto flex items-center gap-x-4"}>
            <select
                className="block w-[100px] appearance-none border-0 border-b border-gray-300 bg-transparent px-2 py-2.5 text-center text-sm text-gray-500 focus:outline-none focus:ring-0"
                defaultValue={orderBy || "DEFAULT"}
                onChange={(e) => {
                    const urlSearchParams = new URLSearchParams(Array.from(searchParams.entries()));
                    const value = e.currentTarget.value;

                    if (value) {
                        urlSearchParams.set("orderBy", value);
                    } else {
                        urlSearchParams.delete("orderBy");
                    }

                    // @ts-expect-error FIXME
                    router.replace(`${route}?${urlSearchParams.toString()}`);
                }}
            >
                <option value={"DEFAULT"}>Default</option>

                {Object.entries(orderBySelect).map(([key, value]) => (
                    <option key={key} value={key} data-testid={value.testId}>
                        {value.text}
                    </option>
                ))}
            </select>
            <select
                className="block w-[100px] appearance-none border-0 border-b border-gray-300 bg-transparent px-2 py-2.5 text-center text-sm text-gray-500 focus:outline-none focus:ring-0"
                defaultValue={order || "ASC"}
                onChange={(e) => {
                    const urlSearchParams = new URLSearchParams(Array.from(searchParams.entries()));
                    const value = e.currentTarget.value;

                    if (value) {
                        urlSearchParams.set("order", value);
                    } else {
                        urlSearchParams.delete("order");
                    }

                    // @ts-expect-error FIXME
                    router.replace(`${route}?${urlSearchParams.toString()}`);
                }}
            >
                <option value={"ASC"}>Asc</option>
                <option value={"DESC"}>Desc</option>
            </select>
        </div>
    );
};
