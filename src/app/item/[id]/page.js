import ItemDetail from "@/components/ItemDetails";

export default async function Page({ params }) {
  const { id } = await params; 
  return <ItemDetail id={id} />;
}