import ProductList from "@/components/ProductList";

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize dark:text-white">
        {params.category.replace('-', ' ')}
      </h1>
      <ProductList category={params.category} />
    </div>
  );
}
