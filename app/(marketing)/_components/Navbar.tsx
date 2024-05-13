import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-[150px] md:h-[100px] bg-[#FEFCF6] m-2 p-4 rounded-lg flex flex-col md:flex-row  md:justify-between items-center justify-center gap-4">
      <Logo />
      <div className="flex justify-evenly items-center gap-8">
        <Button
          size="lg"
          asChild
          className="bg-[#57428B] text-white hover:bg-[#4C3C7A] font-semibold text-xl"
        >
          <Link href="/sign-up">Sign up</Link>
        </Button>
        <Button
          size="lg"
          asChild
          className="bg-[#F6C8D0] text-black hover:bg-[#F4B9C3] font-semibold  text-xl"
        >
          <Link href="/sign-in">Sign in</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
