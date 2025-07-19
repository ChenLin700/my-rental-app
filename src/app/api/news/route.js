import { NextResponse } from "next/server";

const newsList = [
  { id: 1, date: "2025/07/15", content: "新增線上看房預約功能" },
  { id: 2, date: "2025/07/01", content: "系統維護公告，服務將於深夜暫停" },
  { id: 3, date: "2025/06/20", content: "推出租屋物件地圖瀏覽" },
];

export async function GET() {
  return NextResponse.json(newsList);
}
