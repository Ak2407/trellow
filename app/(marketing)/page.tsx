import Copyright from "./_components/Copyright";
import Graphic from "./_components/Graphic";
import Hero from "./_components/Hero";
import Madeby from "./_components/Madeby";

const MarketingPage = () => {
  return (
    <div className="h-full flex-grow grid lg:grid-cols-5 gap-2 lg:grid-rows-4">
      <div className="bg-[#FEFCF6] rounded-lg p-4 ml-2 mr-2 lg:mr-0 lg:col-span-2 lg:row-span-3 p-16">
        <Hero />
      </div>
      <div className="bg-[#FEFCF6] rounded-lg lg:mb-2 p-4 mr-2 ml-2 lg:ml-0 lg:col-span-3 lg:row-span-4">
        <Graphic />
      </div>
      <div className="bg-[#FEFCF6] rounded-lg lg:mb-2 p-4 ml-2 mr-2 lg:mr-0 lg:col-span-1 flex justify-center items-center text-center">
        <Copyright />
      </div>
      <div className="bg-[#FEFCF6] rounded-lg p-4 mb-2 ml-2 mr-2 lg:ml-0 lg:mr-0 lg:col-span-1 flex justify-center items-center text-center">
        <Madeby />
      </div>
    </div>
  );
};

export default MarketingPage;
