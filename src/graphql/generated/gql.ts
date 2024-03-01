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
    "fragment SingleProduct on Product {\n  id\n  categories {\n    id\n    name\n  }\n  description\n  images {\n    alt\n    height\n    id\n    url\n    width\n  }\n  name\n  price\n  rating\n}": types.SingleProductFragmentDoc,
    "query CategoriesList($take: Int, $skip: Int) {\n  categories(take: $take, skip: $skip) {\n    data {\n      id\n      name\n      description\n      slug\n    }\n    meta {\n      total\n    }\n  }\n}\n\nquery CategoryProducts($slug: String) {\n  category(slug: $slug) {\n    id\n    products {\n      ...SingleProduct\n    }\n  }\n}": types.CategoriesListDocument,
    "query CollectionsList($take: Int, $skip: Int) {\n  collections(take: $take, skip: $skip) {\n    data {\n      id\n      name\n      description\n      slug\n    }\n    meta {\n      total\n    }\n  }\n}\n\nquery CollectionProducts($slug: String) {\n  collection(slug: $slug) {\n    id\n    products {\n      ...SingleProduct\n    }\n  }\n}": types.CollectionsListDocument,
    "query ProductById($id: ID!) {\n  product(id: $id) {\n    ...SingleProduct\n  }\n}\n\nquery RelatedProducts {\n  products(take: 4) {\n    data {\n      ...SingleProduct\n    }\n  }\n}": types.ProductByIdDocument,
    "query ProductsList($take: Int, $skip: Int, $search: String) {\n  products(take: $take, skip: $skip, search: $search) {\n    data {\n      ...SingleProduct\n    }\n    meta {\n      total\n    }\n  }\n}": types.ProductsListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment SingleProduct on Product {\n  id\n  categories {\n    id\n    name\n  }\n  description\n  images {\n    alt\n    height\n    id\n    url\n    width\n  }\n  name\n  price\n  rating\n}"): typeof import('./graphql').SingleProductFragmentDoc;
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
export function graphql(source: "query ProductById($id: ID!) {\n  product(id: $id) {\n    ...SingleProduct\n  }\n}\n\nquery RelatedProducts {\n  products(take: 4) {\n    data {\n      ...SingleProduct\n    }\n  }\n}"): typeof import('./graphql').ProductByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsList($take: Int, $skip: Int, $search: String) {\n  products(take: $take, skip: $skip, search: $search) {\n    data {\n      ...SingleProduct\n    }\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').ProductsListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
