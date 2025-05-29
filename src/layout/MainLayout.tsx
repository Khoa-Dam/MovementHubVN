"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#050302] p-3">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
