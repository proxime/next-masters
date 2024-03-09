"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { type ChangeEventHandler, useState, useEffect } from "react";
import { useDebounce } from "@/utils/hooks/useDebounce";

export const Search = () => {
    const router = useRouter();
    const params = useSearchParams();
    const query = params.get("query");

    const [value, setValue] = useState<string>(query || "");
    const debouncedValue = useDebounce<string>(value, 500);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        debouncedValue && router.replace(`/search?query=${debouncedValue}`);
    }, [debouncedValue, router]);

    return (
        <div className={"relative w-full"}>
            <input
                className="w-full rounded-md border border-gray-300 bg-gray-100 py-3 pl-4 pr-12 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-800"
                placeholder="Search for products"
                onChange={handleChange}
                type="text"
                role="searchbox"
                value={value}
            />
            <div className={"absolute right-5 top-3.5 cursor-pointer"}>
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M21.2556 20.394L17.1476 16.286C17.8582 15.454 18.4129 14.5137 18.8116 13.465C19.2102 12.4163 19.4096 11.3287 19.4096 10.202C19.4096 8.486 18.9762 6.89134 18.1096 5.418C17.2776 3.97934 16.1422 2.83534 14.7036 1.98601C13.2302 1.11934 11.6269 0.686005 9.89356 0.686005C8.16023 0.686005 6.5569 1.11934 5.08356 1.98601C3.6449 2.818 2.5009 3.94467 1.65156 5.366C0.784896 6.85667 0.351562 8.46434 0.351562 10.189C0.351562 11.9137 0.784896 13.5127 1.65156 14.986C2.48356 16.4247 3.61023 17.5687 5.03156 18.418C6.52223 19.302 8.13423 19.744 9.86756 19.744C10.9942 19.744 12.0819 19.5447 13.1306 19.146C14.1792 18.7473 15.1196 18.1927 15.9516 17.482L20.0596 21.59C20.1116 21.642 20.1896 21.6897 20.2936 21.733C20.3976 21.7763 20.5016 21.798 20.6056 21.798C20.7096 21.798 20.8136 21.7763 20.9176 21.733C21.0216 21.6897 21.0996 21.642 21.1516 21.59C21.3596 21.382 21.4679 21.174 21.4766 20.966C21.4852 20.758 21.4116 20.5673 21.2556 20.394ZM2.06756 10.098C2.06756 8.67667 2.4229 7.35934 3.13356 6.146C3.8269 4.98467 4.75423 4.05734 5.91556 3.36401C7.1289 2.65334 8.44623 2.29801 9.86756 2.29801C11.2889 2.29801 12.6062 2.662 13.8196 3.39001C14.9982 4.08334 15.9342 5.02801 16.6276 6.224C17.3209 7.42 17.6676 8.72001 17.6676 10.124C17.6676 11.528 17.3036 12.8367 16.5756 14.05C15.8822 15.2287 14.9376 16.1647 13.7416 16.858C12.5456 17.5513 11.2542 17.898 9.86756 17.898C8.46356 17.9327 7.14623 17.5947 5.91556 16.884C4.75423 16.208 3.82256 15.2633 3.12056 14.05C2.41856 12.8367 2.06756 11.5193 2.06756 10.098Z"
                        fill="black"
                    />
                </svg>
            </div>
        </div>
    );
};
