import { NextResponse } from "next/server";

const houses = [
  {
    id: 1,
    title: "近捷運精美套房",
    price: 12000,
    area: "台北市",
    type: "套房",
    img: "https://images.unsplash.com/photo-1600585154370-366b8c44d5d3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "交通便利兩房一廳",
    price: 18000,
    area: "新北市",
    type: "兩房一廳",
    img: "https://images.unsplash.com/photo-1586105251261-72a756497a30?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "溫馨家庭三房",
    price: 25000,
    area: "台中市",
    type: "三房以上",
    img: "https://images.unsplash.com/photo-1598928506310-20b3d4d13297?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "時尚設計師風格一房一廳",
    price: 15000,
    area: "高雄市",
    type: "一房一廳",
    img: "https://images.unsplash.com/photo-1560448071-0bcf39e4a88b?auto=format&fit=crop&w=800&q=80",
  },
];

export async function GET() {
  return NextResponse.json(houses);
}
