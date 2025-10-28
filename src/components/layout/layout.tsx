import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { HashtagBar } from "./hashtag-bar";
import { Footer } from "./footer";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HashtagBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
