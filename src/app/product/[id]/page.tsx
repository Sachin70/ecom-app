"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { addToCart } from "@/store/cartSlice";
import { fetchProducts } from "@/store/productsSlice";
import { AppDispatch, RootState } from "@/store/store";


export default function ProductPage({ params }: { params: { id: string } }) {
  const dispatch = useDispatch<AppDispatch>();
  const {
    items: products,
    status,
    error,
  } = useSelector((state: RootState) => state.products);
  const product = products.find((p) => p.id === Number.parseInt(params.id));

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            width={400}
            height={400}
            objectFit="contain"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4 dark:text-white">
            {product.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {product.category}
          </p>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {product.description}
          </p>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
