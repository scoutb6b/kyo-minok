import { Outlet } from "react-router";
import Footer from "~/_components/Footer";
import Header from "~/_components/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
