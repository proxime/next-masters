import { notFound } from "next/navigation";
import Link from "next/link";
import { getCollections } from "@/app/collections/getCollections";

export default async function CategoriesPage() {
    const { collections } = await getCollections();
    if (!collections) return notFound();

    return (
        <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <ul role="list">
                {collections.data.map((collection) => (
                    <Link key={collection.id} href={`/collections/${collection.slug}`}>
                        <li className="flex justify-between gap-x-6 border-b-2 border-gray-100 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">
                                        {collection.name}
                                    </p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                        {collection.description}
                                    </p>
                                </div>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </main>
    );
}
