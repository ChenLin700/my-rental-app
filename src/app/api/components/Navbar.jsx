import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-blue-600">租屋王</div>
        <div className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            首頁
          </Link>
          <Link href="/app" className="text-gray-700 hover:text-blue-600">
            房源列表
          </Link>
          <Link href="/news" className="text-gray-700 hover:text-blue-600">
            最新消息224
          </Link>
          <button className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            登入224
          </button>
        </div>
      </div>
    </nav>
  );
}
