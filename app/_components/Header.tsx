import { useState } from "react";
import {
  ArrowBendRightDownIcon,
  ArrowBendRightUpIcon,
} from "@phosphor-icons/react";
import { Link, NavLink } from "react-router";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { href: "/", label: "トップページ" },
    { href: "/blog", label: "記事" },
    { href: "/photo", label: "写真" },
    { href: "/#about", label: "プロフィール" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky w-2/3 max-md:w-3/4 mx-auto top-4 z-50 mb-6 ">
      <div className="shadow-[0_0_0_2px_rgb(209,213,219)] rounded-3xl bg-amber-50">
        <div
          className={`container mx-auto px-8 max-md:px-2 py-4 flex justify-between overflow-hidden ${
            isMenuOpen ? " rounded-t-3xl" : "rounded-3xl"
          }`}
        >
          <Link to={"/"}>
            <img className="h-8" src="/logo.svg" alt="" />
          </Link>

          <div
            className="cursor-pointer flex text-sm items-center "
            onClick={toggleMenu}
          >
            menu
            {isMenuOpen ? (
              <ArrowBendRightUpIcon weight="fill" size={28} />
            ) : (
              <ArrowBendRightDownIcon weight="fill" size={28} />
            )}
          </div>
        </div>
        <div
          className={`container mx-auto px-10 rounded-b-3xl transition-all duration-600 ease-in-out overflow-hidden ${
            isMenuOpen
              ? "max-h-96 opacity-100 pb-4"
              : "max-h-0 opacity-0 pb-0"
          }`}
        >
          <nav>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <NavLink
                    to={`${item.href}`}
                    className="block py-2 px-4 hover:bg-amber-100 rounded-2xl"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
