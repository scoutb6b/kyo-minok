import type { Photo } from "~/_types/Photo";

type Props = {
  item: Photo;
};

export default function PhotoCard({ item }: Props) {
  return (
    <div
      className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group
        transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
    >
      <figure className="w-full h-full">
        <img
          src={item.imgUrl}
          alt={item.alt}
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </figure>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
        <div className="absolute bottom-0 right-0 left-0 p-4 text-white">
          <p className="text-lg leading-tight mb-1 drop-shadow-lg text-right">
            {item.title}
          </p>
          <p className="text-xs opacity-90 drop-shadow-md text-right">
            {item.date}
          </p>
        </div>
      </div>
    </div>
  );
}
