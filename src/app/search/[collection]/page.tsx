import ProductCard from "@/components/product-card";
import { defaultSort, sorting } from "@/lib/constants";
import { getCollectionProducts } from "@/lib/shopify";

export default async function CategoryPage({
  params,
  searchParams
}: {
  params: { collection: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  const products = await getCollectionProducts({ collection: params.collection, sortKey, reverse });

  return (
    <section>
      { products.length === 0 ? (
        <p>No products in this collection</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          { products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      )}
    </section>
  )
}