"use client";

import { type UrlObject } from "url";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import type { Route } from "next";

interface ActiveLinkProps<T extends string> {
    activeClassName: string;
    children: ReactNode;
    className: string;
    exact?: boolean;
    href: Route<T> | UrlObject;
}

export const ActiveLink = <T extends string>({
    href,
    className,
    activeClassName,
    children,
    exact = false,
    ...props
}: ActiveLinkProps<T>) => {
    const pathname = usePathname();
    const isActive = exact ? pathname === href : pathname.startsWith(href as string);

    return (
        <Link
            {...props}
            href={href}
            className={twMerge(className, isActive && activeClassName)}
            {...(isActive && { "aria-current": "page" })}
        >
            {children}
        </Link>
    );
};
