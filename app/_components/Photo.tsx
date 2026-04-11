import PhotoCard from "./PhotoCard";

export default function Photo() {
  const PHOTO = [
    {
      title: "淡路",
      date: "2025/6/25-2025/6/28",
      imgUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      alt: "兵庫旅行",
    },
    {
      title: "淡路",
      date: "2025/6/25-2025/6/28",
      imgUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      alt: "兵庫旅行",
    },
    {
      title: "淡路",
      date: "2025/6/25-2025/6/28",
      imgUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      alt: "兵庫旅行",
    },
    {
      title: "淡路",
      date: "2025/6/25-2025/6/28",
      imgUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      alt: "兵庫旅行",
    },
    {
      title: "淡路",
      date: "2025/6/25-2025/6/28",
      imgUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      alt: "兵庫旅行",
    },
  ];

  return (
    <div className="order-2 lg:row-span-2 lg:order-2 bg-card rounded-2xl shadow-lg p-5 bg-white border-border/50 overflow-hidden">
      <h3 className="border-b border-gray-300 font-bold">写真</h3>
      {/* <div className="grid grid-cols-2  gap-4 p-4">
        {PHOTO.map((item) => (
          <PhotoCard item={item} />
        ))}
      </div> */}
      <div className="pt-10">
        <p>そのうちupします:D</p>
      </div>
    </div>
  );
}
