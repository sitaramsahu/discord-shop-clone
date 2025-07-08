import ProductCard from "@/app/components/Products/ProductCard";

const products = [
  {
    title: "Nitro Classic",
    price: "$4.99 / month",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968756.png",
  },
  {
    title: "Nitro Boost",
    price: "$9.99 / month",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968753.png",
  },
  {
    title: "Discord Merch",
    price: "$29.99",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968777.png",
  },
  {
    title: "Gaming Bundle",
    price: "$49.99",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968742.png",
  },
];

export default function ProductsSection() {
  return (
    <section className="bg-white dark:bg-[#23272A] text-black dark:text-white py-20 px-6">
      <h1 className="text-3xl text-white font-bold mb-10 text-center">
        Shop Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {products.map((p, i) => (
          <ProductCard
            key={i}
            title={p.title}
            price={p.price}
            image={p.image}
          />
        ))}
      </div>
    </section>
  );
}
