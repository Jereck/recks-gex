import ProductCard from '@/components/product-card'
import Hero from '@/components/hero' 
import { getProducts } from '@/lib/shopify'

export default async function Home() {
  const products = await getProducts({})

  console.log("Products: ", products)

  return (
    <main className="flex min-h-screen flex-col">
      <Hero />

      <div>
        <h1 className="text-3xl">Our Available Geckos</h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          { products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </div>

    </main>
  )
}
