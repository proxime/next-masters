import { cookies } from "next/headers";
import Link from "next/link";
import { executeGraphQL } from "@/utils/executeGraphQL";
import { CartGetByIdDocument } from "@/graphql/generated/graphql";

export const CartLink = async () => {
    const cartId = cookies().get("cartId")?.value;
    const data = cartId
        ? await executeGraphQL({
              query: CartGetByIdDocument,
              variables: {
                  id: cartId,
              },
              next: {
                  tags: ["cart"],
              },
              cache: "no-store",
          })
        : null;

    const orderItems = data?.cart?.items?.length || 0;

    return (
        <Link href={"/cart"}>
            <div className={"relative flex flex-col items-center"}>
                <svg
                    width="27"
                    height="26"
                    viewBox="0 0 27 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_6314_1314)">
                        <path
                            d="M22.4126 3.25H1.30063C1.04063 3.28467 0.823958 3.406 0.650625 3.614C0.477292 3.822 0.390625 4.056 0.390625 4.316C0.390625 4.576 0.477292 4.81433 0.650625 5.031C0.823958 5.24767 1.04063 5.37333 1.30063 5.408H5.48663L4.73263 15.002V15.184C4.73263 15.7733 4.94496 16.2803 5.36963 16.705C5.79429 17.1297 6.30129 17.342 6.89062 17.342H20.1766C20.6966 17.342 21.1516 17.1817 21.5416 16.861C21.9316 16.5403 22.1786 16.146 22.2826 15.678L24.5186 5.902C24.5533 5.694 24.5706 5.52933 24.5706 5.408C24.5706 4.80133 24.3626 4.29 23.9466 3.874C23.5306 3.458 23.0193 3.25 22.4126 3.25ZM20.1766 15.158H6.89062L7.64463 5.408H22.4126L20.1766 15.158ZM8.89262 22.75C9.49929 22.75 10.015 22.5377 10.4396 22.113C10.8643 21.6883 11.0766 21.1727 11.0766 20.566C11.0766 19.9593 10.8643 19.448 10.4396 19.032C10.015 18.616 9.49929 18.408 8.89262 18.408C8.30329 18.408 7.79629 18.616 7.37162 19.032C6.94696 19.448 6.73463 19.9593 6.73463 20.566C6.73463 21.1727 6.94696 21.6883 7.37162 22.113C7.79629 22.5377 8.30329 22.75 8.89262 22.75ZM18.6426 22.75C19.2493 22.75 19.765 22.5377 20.1896 22.113C20.6143 21.6883 20.8266 21.1727 20.8266 20.566C20.8266 19.9593 20.6143 19.448 20.1896 19.032C19.765 18.616 19.2493 18.408 18.6426 18.408C18.0533 18.408 17.5463 18.616 17.1216 19.032C16.697 19.448 16.4846 19.9593 16.4846 20.566C16.4846 21.1727 16.697 21.6883 17.1216 22.113C17.5463 22.5377 18.0533 22.75 18.6426 22.75Z"
                            fill="#000"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_6314_1314">
                            <rect
                                width="26"
                                height="26"
                                fill="white"
                                transform="matrix(1 0 0 -1 0.230469 26)"
                            />
                        </clipPath>
                    </defs>
                </svg>
                <span
                    className={
                        "absolute right-1 top-[-6px] flex h-5 w-5 items-center justify-center rounded-full bg-orange-400 text-xs text-white"
                    }
                >
                    {orderItems ?? 0}
                </span>
                <span className={"text-nowrap text-sm"}>Your cart</span>
            </div>
        </Link>
    );
};
