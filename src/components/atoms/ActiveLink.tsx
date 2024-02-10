"use client";

import Link, { type LinkProps } from "next/link";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import type { Route } from "next";

interface ActiveLinkProps<T extends string> extends LinkProps<Route<T> | URL> {
    activeClassName: string;
    children: ReactNode;
    className: string;
    exact?: boolean;
    withPathname?: boolean;
    isActive?: boolean;
}

export const ActiveLink = <T extends string>({
    href,
    className,
    activeClassName,
    children,
    exact,
    isActive,
    ...props
}: ActiveLinkProps<T>) => {
    const pathname = usePathname();
    const active = isActive || (exact ? pathname === href : pathname.startsWith(href as string));

    return (
        <Link
            {...props}
            // @ts-expect-error problem with documentation https://nextjs.org/docs/app/building-your-application/configuring/typescript#statically-typed-links
            href={href}
            className={twMerge(className, active && activeClassName)}
            {...(active && { "aria-current": "page" })}
        >
            {children}
        </Link>
    );
};
