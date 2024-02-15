"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useParams } from "next/navigation";
import { type Route } from "next";
import Link from "next/link";
import { ActiveLink } from "@/components/atoms/ActiveLink";

interface PaginationProps {
    totalCount: number;
    pageSize: number;
    path: string;
}

export const Pagination = ({ totalCount, pageSize, path }: PaginationProps) => {
    const params = useParams();

    const currentPage = Number(params.page) || 1;

    const createPageURL = (pageNumber: number): Route => {
        return `${path}/${pageNumber}` as Route;
    };

    const pages = Math.ceil(totalCount / pageSize);

    return (
        <div
            className="mt-6 flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
            aria-label="pagination"
        >
            <div className="flex flex-1 justify-between sm:hidden">
                <Link
                    href={createPageURL(currentPage - 1)}
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </Link>
                <Link
                    href={createPageURL(currentPage + 1)}
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </Link>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing{" "}
                        <span className="font-medium">{(currentPage - 1) * pageSize + 1}</span> to{" "}
                        <span className="font-medium">{currentPage * pageSize}</span> of{" "}
                        <span className="font-medium">{totalCount}</span> results
                    </p>
                </div>
                <div>
                    <nav
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                        aria-label="Pagination"
                    >
                        <Link
                            href={createPageURL(currentPage - 1)}
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </Link>
                        {Array.from({ length: pages }, (_, i) => (
                            <ActiveLink
                                key={i}
                                href={createPageURL(i + 1)}
                                activeClassName="bg-indigo-600 text-white -2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-indigo-700"
                                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                {i + 1}
                            </ActiveLink>
                        ))}
                        <Link
                            href={createPageURL(currentPage + 1)}
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};
