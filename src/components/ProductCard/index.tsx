"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/store/productsSlice";

export default function ProductCard({ product }: { product: Product }) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 bg-white dark:bg-white">
          <Image
            src={imageError ? "/placeholder.svg" : product.image}
            alt={product.title}
            fill
            className="object-contain"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2 dark:text-white line-clamp-1">
            {product.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-2 capitalize">
            {product.category}
          </p>
          <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
}
