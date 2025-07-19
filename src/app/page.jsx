"use client";

import { useEffect, useState } from "react";
import Navbar from "../app/api/components/Navbar";
import Footer from "../app/api/components/Footer";
import SearchBar from "../app/api/components/SearchBar";
import HouseList from "../app/api/components/HouseList";
import NewsList from "../app/api/components/NewsList";

export default function Home() {
  const [houses, setHouses] = useState([]);
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState({
    area: "",
    type: "",
    maxPrice: 30000,
  });

  useEffect(() => {
    async function fetchData() {
      const housesRes = await fetch("/api/houses");
      const housesData = await housesRes.json();
      setHouses(housesData);

      const newsRes = await fetch("/api/news");
      const newsData = await newsRes.json();
      setNews(newsData);
    }
    fetchData();
  }, []);

  // 篩選房屋
  const filteredHouses = houses.filter((house) => {
    const matchArea = filter.area ? house.area === filter.area : true;
    const matchType = filter.type ? house.type === filter.type : true;
    const matchPrice = house.price <= filter.maxPrice;
    return matchArea && matchType && matchPrice;
  });

  return (
    <>
      <Navbar />
      <SearchBar onFilter={setFilter} />
      <section className="container mx-auto px-6 py-10 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-6">熱門租屋物件</h2>
        <HouseList houses={filteredHouses} />
      </section>

      <section className="container mx-auto px-6 py-10 max-w-5xl bg-white rounded-lg shadow-md mt-10">
        <h2 className="text-2xl font-semibold mb-6">最新消息</h2>
        <NewsList news={news} />
      </section>
      <Footer />
    </>
  );
}
