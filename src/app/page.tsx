import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">All Products</h1>
      <ProductList />
    </div>
  );
}
