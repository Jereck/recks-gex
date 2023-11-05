import ProductCard from '@/components/product-card'
import Hero from '@/components/hero' 
import { getProducts } from '@/lib/shopify'
import SideNav from '@/components/side-nav'
import FilterList from '@/components/filter'
import { sorting } from '@/lib/constants'

export default async function Home() {
  const products = await getProducts({})

  console.log("Products: ", products)

  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
    </main>
  )
}
