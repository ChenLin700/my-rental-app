"use client";

import { useState } from "react";

const areas = ["台北市", "新北市", "台中市", "高雄市"];
const roomTypes = ["套房", "一房一廳", "兩房一廳", "三房以上"];

export default function SearchBar({ onFilter }) {
  const [searchArea, setSearchArea] = useState("");
  const [searchType, setSearchType] = useState("");
  const [maxPrice, setMaxPrice] = useState(30000);

  // 每當搜尋條件改變，回傳給父層
  function handleChange() {
    onFilter({
      area: searchArea,
      type: searchType,
      maxPrice,
    });
  }

  return (
    <section className="container mx-auto px-5 py-10 bg-white rounded-lg shadow-md max-w-3xl">
      <h2 className="text-2xl font-semibold mb-6">快速搜尋租屋</h2>
      <div className="flex flex-wrap gap-6">
        <select
          value={searchArea}
          onChange={(e) => {
            setSearchArea(e.target.value);
            handleChange();
          }}
          className="border border-gray-300 rounded px-4 py-2 w-40"
        >
          <option value="">全部區域</option>
          {areas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>

        <select
          value={searchType}
          onChange={(e) => {
            setSearchType(e.target.value);
            handleChange();
          }}
          className="border border-gray-300 rounded px-4 py-2 w-40"
        >
          <option value="">全部房型</option>
          {roomTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <div className="w-48">
          <label className="block mb-1 text-gray-700 font-semibold">租金範圍 (NT$)</label>
          <input
            type="range"
            min="0"
            max="30000"
            step="1000"
            value={maxPrice}
            onChange={(e) => {
              setMaxPrice(Number(e.target.value));
              handleChange();
            }}
            className="w-full"
          />
          <div className="text-sm text-gray-600 mt-1">最高：NT${maxPrice}</div>
        </div>
      </div>
    </section>
  );
}
