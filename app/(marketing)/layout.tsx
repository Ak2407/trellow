import Navbar from "./_components/Navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen bg-[#E5E5E5]">
      <Navbar />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default MarketingLayout;
