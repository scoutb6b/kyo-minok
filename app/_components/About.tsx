import {
  BooksIcon,
  CameraIcon,
  CodeIcon,
  LaptopIcon,
  PaletteIcon,
  RadioIcon,
} from "@phosphor-icons/react";
import Avatar from "boring-avatars";
import type { ReactNode } from "react";
import { Link } from "react-router";
type Interset = {
  name: string;
  icon: ReactNode;
};

export default function About() {
  const interest: Interset[] = [
    {
      name: "カメラ",
      icon: <CameraIcon size={20} color="#5c3838" />,
    },
    {
      name: "ガジェット",
      icon: <LaptopIcon size={20} color="#5c3838" />,
    },
    {
      name: "読書",
      icon: <BooksIcon size={20} color="#5c3838" />,
    },
    {
      name: "芸人のラジオ",
      icon: <RadioIcon size={20} color="#5c3838" />,
    },
    {
      name: "プログラミング",
      icon: <CodeIcon size={20} color="#5c3838" />,
    },
    {
      name: "デザイン",
      icon: <PaletteIcon size={20} color="#5c3838" />,
    },
  ];
  return (
    <div
      id="about"
      className="order-3 lg:row-span-1 lg:order-3  bg-card rounded-2xl shadow-lg gap-4 p-5 bg-white border-border/50 overflow-hidden scroll-mt-[300px]"
    >
      <h3 className="border-b border-gray-300 font-bold">
        プロフィール
      </h3>
      <div>
        <Link to={"user/ko"}>
          <div className="flex gap-4 py-4 items-center">
            <figure className="w-[75px] h-[75px] rounded-full">
              <Avatar
                name="Carrie Chapman"
                variant="beam"
                colors={[
                  "#0a0310",
                  "#49007e",
                  "#ff005b",
                  "#ff7d10",
                  "#ffb238",
                ]}
                size={80}
              />
            </figure>
            <h4 className="">ko</h4>
          </div>
        </Link>
        <div className="my-2">
          <p className="">目標は西日本に住むことです。</p>
        </div>
        <div>
          <p className="py-2 font-bold">興味・好きなもの</p>
          <div className="grid grid-cols-2 gap-2">
            {interest.map((item) => {
              return (
                <div
                  key={item.name}
                  className="flex items-center gap-2 p-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors"
                >
                  {item.icon}
                  <span className="text-xs">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          {/* <p className="py-2 font-bold">外部メディア</p> */}
        </div>
      </div>
    </div>
  );
}
