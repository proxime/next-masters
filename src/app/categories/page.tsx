import { notFound } from "next/navigation";
import Link from "next/link";
import { getCategories } from "@/app/categories/getCategories";

export default async function CategoriesPage() {
    const { categories } = await getCategories();
    if (!categories) return notFound();

    return (
        <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <ul role="list">
                {categories.data.map((category) => (
                    <Link key={category.id} href={`/categories/${category.slug}`}>
                        <li className="flex justify-between gap-x-6 border-b-2 border-gray-100 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">
                                        {category.name}
                                    </p>
                                    {category.description && (
                                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                            {category.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </main>
    );
}
