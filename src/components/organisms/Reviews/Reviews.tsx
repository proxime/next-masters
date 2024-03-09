import { RatingStars } from "@/components/molecules/RatingStars/RatingStars";
import { ReviewForm } from "@/components/organisms/ReviewForm/ReviewForm";
import { getReviews } from "@/components/organisms/Reviews/getReviews";

interface ReviewsProps {
    productId: string;
}

export const Reviews = async ({ productId }: ReviewsProps) => {
    const { reviews } = await getReviews(productId);
    if (!reviews) return null;

    return (
        <section data-testid="related-products">
            <h2 className="mb-6 text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Product reviews
            </h2>
            <div className="col grid grid-cols-[500px_1fr] gap-x-16">
                <ReviewForm productId={productId} />

                <article>
                    {reviews.map(({ author, createdAt, description, id, rating, title }) => (
                        <div key={id} className="mb-5 border-b-2 border-slate-200 pb-4">
                            <div className="mb-4 flex items-center">
                                <div className="font-medium dark:text-white">
                                    <p>{author} </p>
                                </div>
                            </div>
                            <div className="mb-1 flex items-center space-x-1 rtl:space-x-reverse">
                                <RatingStars count={5} readOnly value={rating} />
                                <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">
                                    {title}
                                </h3>
                            </div>
                            <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                                <p>
                                    Reviewed on{" "}
                                    <time dateTime={createdAt as string}>
                                        {new Date(createdAt as string).toLocaleDateString()}
                                    </time>
                                </p>
                            </footer>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">{description}</p>
                        </div>
                    ))}
                </article>
            </div>
        </section>
    );
};
