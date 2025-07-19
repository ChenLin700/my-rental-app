export default function HouseCard({ house }) {
  const { title, price, area, type, img } = house;
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer">
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-1">
          地區：<span className="font-medium">{area}</span>
        </p>
        <p className="text-gray-600 mb-1">
          房型：<span className="font-medium">{type}</span>
        </p>
        <p className="text-blue-600 font-bold text-xl">NT${price.toLocaleString()}</p>
      </div>
    </div>
  );
}
