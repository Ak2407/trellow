import { Button } from "@/components/ui/button";
import { MousePointerClick } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="lg:text-6xl text-5xl font-bold text-center lg:text-left">
            Easy
          </h1>
          <h1 className="lg:text-6xl text-5xl font-bold text-center lg:text-left">
            Management
          </h1>
          <h1 className="lg:text-6xl text-5xl font-bold text-center lg:text-left">
            of Tasks.
          </h1>
        </div>

        <h1 className="lg:text-lg text-md font-thin text-slate-500 text-center lg:text-left">
          Minimal and Easy to use Task management application at your
          fingertips.
        </h1>
        <Button className="h-11 rounded-full p-8  bg-[#57428B] text-white hover:bg-[#4C3C7A] font-semibold text-xl">
          <Link href="/sign-up">
            <div className="flex flex-row justify-center gap-4 items-center w-full">
              <h1 className="text-xl lg:text-2xl">Try Now</h1>
              <MousePointerClick size={32} />
            </div>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
