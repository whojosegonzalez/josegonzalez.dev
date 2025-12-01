import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import usePageTitle from "../hooks/usePageTitle";

export default function RootLayout() {
  usePageTitle();
  return (
    <div className="min-h-dvh flex flex-col bg-gray-200 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 print:bg-white print:text-black">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-10 flex-1 w-full print:p-0 print:max-w-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}