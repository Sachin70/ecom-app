"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 w-64 space-y-6 py-12 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        <Link
          href="/"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          All Products
        </Link>
        {categories.map((category) => (
          <Link
            key={category}
            href={`/category/${category.replace(" ", "-")}`}
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 capitalize"
          >
            {category}
          </Link>
        ))}
      </nav>
    </div>
  );
}
