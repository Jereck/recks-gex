import { Product } from '@/lib/shopify/types'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Card } from './ui/card'

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
      <Link className="absolute inset-0 z-10" href="#">
        <span className="sr-only">View</span>
      </Link>
      <img
        alt="Product 1"
        className="object-cover w-full h-64"
        height="400"
        src={product.featuredImage.url}
        style={{
          aspectRatio: "500/400",
          objectFit: "cover",
        }}
        width="500"
      />
      <div className="bg-white p-4 dark:bg-zinc-950">
        <h3 className="font-bold text-xl">{ product.title }</h3>
        <p className="text-sm text-gray-500">{ product.description }</p>
        <h4 className="font-semibold text-lg md:text-xl">${ product.priceRange.maxVariantPrice.amount }</h4>
        <Button className="w-full mt-2" variant="outline">
          Add to cart
        </Button>
      </div>
    </Card>
  )
}

export default ProductCard