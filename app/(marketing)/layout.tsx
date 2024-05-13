import Navbar from "./_components/Navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col lg:h-screen bg-[#E5E5E5] min-w-full">
      <Navbar />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default MarketingLayout;
