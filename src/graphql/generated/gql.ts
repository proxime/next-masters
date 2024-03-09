/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment SingleProduct on Product {\n  id\n  categories {\n    id\n    name\n  }\n  description\n  images {\n    alt\n    height\n    id\n    url\n    width\n  }\n  name\n  price\n  rating\n}\n\nfragment ProductReview on Review {\n  author\n  createdAt\n  description\n  email\n  id\n  rating\n  title\n}": types.SingleProductFragmentDoc,
    "mutation CartAddItem($id: ID!, $input: MutationCartAddItemInput!) {\n  cartAddItem(id: $id, input: $input) {\n    id\n    items {\n      quantity\n      product {\n        id\n        name\n        price\n      }\n    }\n  }\n}\n\nmutation CartChangeItemQuantity($id: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {\n    id\n  }\n}\n\nmutation CartFindOrCreate {\n  newCart: cartFindOrCreate(input: {items: [{productId: \"1\", quantity: 0}]}) {\n    id\n  }\n}\n\nmutation CartRemoveItem($id: ID!, $productId: ID!) {\n  cartRemoveItem(id: $id, productId: $productId) {\n    id\n  }\n}": types.CartAddItemDocument,
    "mutation CreateReview($author: String!, $description: String!, $email: String!, $productId: ID!, $rating: Int!, $title: String!) {\n  reviewCreate(\n    author: $author\n    description: $description\n    email: $email\n    productId: $productId\n    rating: $rating\n    title: $title\n  ) {\n    id\n  }\n}": types.CreateReviewDocument,
    "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    id\n    items {\n      quantity\n      product {\n        id\n        name\n        price\n        images {\n          id\n          alt\n          height\n          url\n          width\n        }\n      }\n    }\n  }\n}": types.CartGetByIdDocument,
    "query CategoriesList($take: Int, $skip: Int) {\n  categories(take: $take, skip: $skip) {\n    data {\n      id\n      name\n      description\n      slug\n    }\n    meta {\n      total\n    }\n  }\n}\n\nquery CategoryProducts($slug: String) {\n  category(slug: $slug) {\n    id\n    products {\n      ...SingleProduct\n    }\n  }\n}": types.CategoriesListDocument,
    "query CollectionsList($take: Int, $skip: Int) {\n  collections(take: $take, skip: $skip) {\n    data {\n      id\n      name\n      description\n      slug\n    }\n    meta {\n      total\n    }\n  }\n}\n\nquery CollectionProducts($slug: String) {\n  collection(slug: $slug) {\n    id\n    products {\n      ...SingleProduct\n    }\n  }\n}": types.CollectionsListDocument,
    "query ProductById($id: ID!) {\n  product(id: $id) {\n    ...SingleProduct\n  }\n}\n\nquery RelatedProducts {\n  products(take: 4) {\n    data {\n      ...SingleProduct\n    }\n  }\n}\n\nquery ProductReviews($id: ID!) {\n  product(id: $id) {\n    id\n    reviews {\n      ...ProductReview\n    }\n  }\n}": types.ProductByIdDocument,
    "query ProductsList($take: Int, $skip: Int, $search: String, $order: SortDirection, $orderBy: ProductSortBy) {\n  products(\n    take: $take\n    skip: $skip\n    search: $search\n    order: $order\n    orderBy: $orderBy\n  ) {\n    data {\n      ...SingleProduct\n    }\n    meta {\n      total\n    }\n  }\n}": types.ProductsListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment SingleProduct on Product {\n  id\n  categories {\n    id\n    name\n  }\n  description\n  images {\n    alt\n    height\n    id\n    url\n    width\n  }\n  name\n  price\n  rating\n}\n\nfragment ProductReview on Review {\n  author\n  createdAt\n  description\n  email\n  id\n  rating\n  title\n}"): typeof import('./graphql').SingleProductFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddItem($id: ID!, $input: MutationCartAddItemInput!) {\n  cartAddItem(id: $id, input: $input) {\n    id\n    items {\n      quantity\n      product {\n        id\n        name\n        price\n      }\n    }\n  }\n}\n\nmutation CartChangeItemQuantity($id: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {\n    id\n  }\n}\n\nmutation CartFindOrCreate {\n  newCart: cartFindOrCreate(input: {items: [{productId: \"1\", quantity: 0}]}) {\n    id\n  }\n}\n\nmutation CartRemoveItem($id: ID!, $productId: ID!) {\n  cartRemoveItem(id: $id, productId: $productId) {\n    id\n  }\n}"): typeof import('./graphql').CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateReview($author: String!, $description: String!, $email: String!, $productId: ID!, $rating: Int!, $title: String!) {\n  reviewCreate(\n    author: $author\n    description: $description\n    email: $email\n    productId: $productId\n    rating: $rating\n    title: $title\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CreateReviewDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    id\n    items {\n      quantity\n      product {\n        id\n        name\n        price\n        images {\n          id\n          alt\n          height\n          url\n          width\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesList($take: Int, $skip: Int) {\n  categories(take: $take, skip: $skip) {\n    data {\n      id\n      name\n      description\n      slug\n    }\n    meta {\n      total\n    }\n  }\n}\n\nquery CategoryProducts($slug: String) {\n  category(slug: $slug) {\n    id\n    products {\n      ...SingleProduct\n    }\n  }\n}"): typeof import('./graphql').CategoriesListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsList($take: Int, $skip: Int) {\n  collections(take: $take, skip: $skip) {\n    data {\n      id\n      name\n      description\n      slug\n    }\n    meta {\n      total\n    }\n  }\n}\n\nquery CollectionProducts($slug: String) {\n  collection(slug: $slug) {\n    id\n    products {\n      ...SingleProduct\n    }\n  }\n}"): typeof import('./graphql').CollectionsListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductById($id: ID!) {\n  product(id: $id) {\n    ...SingleProduct\n  }\n}\n\nquery RelatedProducts {\n  products(take: 4) {\n    data {\n      ...SingleProduct\n    }\n  }\n}\n\nquery ProductReviews($id: ID!) {\n  product(id: $id) {\n    id\n    reviews {\n      ...ProductReview\n    }\n  }\n}"): typeof import('./graphql').ProductByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsList($take: Int, $skip: Int, $search: String, $order: SortDirection, $orderBy: ProductSortBy) {\n  products(\n    take: $take\n    skip: $skip\n    search: $search\n    order: $order\n    orderBy: $orderBy\n  ) {\n    data {\n      ...SingleProduct\n    }\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').ProductsListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
