import ProductCard from "@/components/product-card";
import { defaultSort, sorting } from "@/lib/constants";
import { getProducts } from "@/lib/shopify";

export const metadata = {
  title: 'Search',
  description: 'Search for the geckos you want'
}

export default async function SearchPage({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort

  const products = await getProducts({ sortKey, reverse, query: searchValue })
  console.log("PRODUCTS: ", products)
  const resultText = products.length > 1 ? 'results' : 'result';

  return (
    <>
      { searchValue ? (
        <p className="mb-4">
          { products.length === 0 ? 'There are not products that match ' : `Showing ${products.length} ${resultText} for `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}

      { products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      ) : null }
    </>
  )
}