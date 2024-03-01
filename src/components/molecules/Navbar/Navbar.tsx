import { Suspense } from "react";
import { ActiveLink } from "@/components/atoms/ActiveLink";
import { NavbarMobile } from "@/components/molecules/Navbar/Navbar.mobile";
import { Search } from "@/components/molecules/Search";

export const Navbar = () => {
    return (
        <header className="bg-white">
            <nav
                className="mx-auto flex max-w-3xl items-center justify-end p-6 lg:max-w-7xl lg:justify-center lg:px-8"
                aria-label="Global"
            >
                <div className="align-center hidden items-center lg:flex lg:gap-x-12">
                    <ActiveLink
                        href={"/"}
                        exact
                        activeClassName="text-blue-700"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Home
                    </ActiveLink>
                    <ActiveLink
                        href="/products"
                        activeClassName="text-blue-700"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        All
                    </ActiveLink>
                    <ActiveLink
                        href="/collections"
                        activeClassName="text-blue-700"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Collections
                    </ActiveLink>
                    <ActiveLink
                        href="/categories"
                        activeClassName="text-blue-700"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Categories
                    </ActiveLink>
                    <div>
                        <Suspense>
                            <Search />
                        </Suspense>
                    </div>
                </div>
                <NavbarMobile />
            </nav>
        </header>
    );
};
