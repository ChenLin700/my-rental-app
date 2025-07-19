import HouseCard from "./HouseCard";

export default function HouseList({ houses }) {
  if (!houses.length) {
    return (
      <p className="text-center text-gray-500 py-10">找不到符合條件的房屋。</p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {houses.map((house) => (
        <HouseCard key={house.id} house={house} />
      ))}
    </div>
  );
}
