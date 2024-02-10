import { ActiveLink } from "@/components/atoms/ActiveLink";
import { NavbarMobile } from "@/components/molecules/Navbar/Navbar.mobile";

export const Navbar = () => {
    return (
        <header className="bg-white">
            <nav
                className="mx-auto flex max-w-3xl items-center justify-end p-6 lg:max-w-7xl lg:justify-center lg:px-8"
                aria-label="Global"
            >
                <div className="hidden lg:flex lg:gap-x-12">
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
                </div>
                <NavbarMobile />
            </nav>
        </header>
    );
};
