import { cookies } from "next/headers";
import Image from "next/image";
import { executeGraphQL } from "@/utils/executeGraphQL";
import { CartGetByIdDocument } from "@/graphql/generated/graphql";
import { formatPrice } from "@/utils/helpers";
import { QuantityButton } from "@/components/atoms/QuantityButton";
import { RemoveButton } from "@/components/atoms/RemoveButton";

export default async function CartModalPage() {
    const cartId = cookies().get("cartId")?.value;

    let cart = null;

    if (cartId) {
        const response = await executeGraphQL({
            query: CartGetByIdDocument,
            variables: {
                id: cartId,
            },
            next: {
                tags: ["cart"],
            },
            cache: "no-store",
        });

        if (response.cart) cart = response.cart;
    }

    const totalCart = cart?.items
        .map((item) => item.quantity * item.product.price)
        .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    return (
        <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div>
                <div
                    className={"flex items-center justify-between border-b border-b-gray-300 pb-4"}
                >
                    <h2 className={"text-xl font-bold"}>Your Cart</h2>
                </div>
                {!!cart?.items.length && cartId && (
                    <ul className={"mt-4"}>
                        {cart.items
                            .filter((item) => item.quantity)
                            .map((item, index) => {
                                if (!item.product) {
                                    return null;
                                }

                                return (
                                    <li
                                        key={item.product.id + index}
                                        className={
                                            "flex items-center justify-between gap-x-4 border-b border-gray-300 py-4"
                                        }
                                    >
                                        <div className={"flex items-center gap-x-8"}>
                                            <div
                                                className={
                                                    "flex shrink-0 items-center justify-center"
                                                }
                                            >
                                                <Image
                                                    src={item.product.images[0].url}
                                                    alt={item.product.images[0].alt}
                                                    width={64}
                                                    height={64}
                                                />
                                            </div>
                                            <div className={"flex flex-col"}>
                                                <p className={"font-bold"}>{item.product.name}</p>
                                                <QuantityButton
                                                    cartId={cartId}
                                                    itemId={item.product.id}
                                                    quantity={item.quantity}
                                                />
                                            </div>
                                        </div>
                                        <div className={"flex gap-x-2"}>
                                            <span>
                                                {formatPrice(item.quantity * item.product.price)}
                                            </span>
                                            <RemoveButton
                                                cartId={cartId}
                                                productId={item.product.id}
                                            />
                                        </div>
                                    </li>
                                );
                            })}
                    </ul>
                )}

                <div className={"flex justify-end py-6 text-purple-900"}>
                    total: {formatPrice(totalCart ?? 0)}
                </div>
            </div>

            {!!cart?.items.length && cartId && (
                <form action={""} className="mt-auto">
                    <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-x-2 rounded-md border bg-black px-2 py-2.5 text-white shadow-sm transition-colors hover:bg-green-700"
                    >
                        <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_6314_7063)">
                                <path
                                    d="M8.12286 1.74208C7.70286 1.74208 7.3132 1.84708 6.95386 2.05708C6.59453 2.26708 6.30986 2.55174 6.09986 2.91108C5.88986 3.27041 5.78486 3.66008 5.78486 4.08008H4.59486C4.59486 3.44541 4.7512 2.85974 5.06386 2.32308C5.37653 1.78641 5.8012 1.36174 6.33786 1.04908C6.87453 0.736411 7.4602 0.580078 8.09486 0.580078C8.72953 0.580078 9.3152 0.736411 9.85186 1.04908C10.3885 1.36174 10.8132 1.78641 11.1259 2.32308C11.4385 2.85974 11.5949 3.44541 11.5949 4.08008H13.8909C14.2269 4.08008 14.5115 4.19908 14.7449 4.43708C14.9782 4.67508 15.0949 4.96674 15.0949 5.31208C15.0949 5.38674 15.0902 5.45674 15.0809 5.52208L13.7789 13.0541C13.7042 13.4927 13.4989 13.8567 13.1629 14.1461C12.8269 14.4354 12.4395 14.5801 12.0009 14.5801H4.18886C3.7502 14.5801 3.36286 14.4354 3.02686 14.1461C2.69086 13.8567 2.48553 13.4927 2.41086 13.0541L1.10886 5.53608C1.05286 5.20008 1.12053 4.89208 1.31186 4.61208C1.5032 4.33208 1.7622 4.15941 2.08886 4.09408C2.1542 4.08474 2.2242 4.08008 2.29886 4.08008H10.4609C10.4609 3.66008 10.3559 3.27041 10.1459 2.91108C9.93586 2.55174 9.6512 2.26708 9.29186 2.05708C8.93253 1.84708 8.54286 1.74208 8.12286 1.74208ZM13.8909 5.24208H2.29886C2.28953 5.24208 2.27553 5.26074 2.25686 5.29808V5.32608L3.55886 12.8581C3.58686 13.0074 3.6522 13.1334 3.75486 13.2361C3.85753 13.3387 3.97886 13.3947 4.11886 13.4041L4.18886 13.4181H12.0009C12.1409 13.4181 12.2692 13.3737 12.3859 13.2851C12.5025 13.1964 12.5795 13.0774 12.6169 12.9281L13.9329 5.31208C13.9329 5.27474 13.9235 5.25608 13.9049 5.25608L13.8909 5.24208Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_6314_7063">
                                    <rect
                                        width="14"
                                        height="14"
                                        fill="white"
                                        transform="matrix(1 0 0 -1 0.96875 14.5801)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                        Buy Now
                    </button>
                </form>
            )}
        </main>
    );
}
