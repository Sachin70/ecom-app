import ClientProductList from "../ClientProductList";

export default function ProductList({ category }: { category?: string }) {
  return <ClientProductList category={category} />;
}
