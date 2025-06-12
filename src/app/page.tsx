import CardModel from "@/components/PostCard/CardModel";

export default function Home() {
  return (

  <main className="container mx-auto">
    <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      <CardModel/>
      <CardModel/>
      <CardModel/>
      <CardModel/>
    </div>      
  </main>
  );
}
