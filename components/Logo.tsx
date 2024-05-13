import Link from "next/link";

const Logo = () => {
  return (
    <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
      <Link href="/">
        <h1 className="text-[32px]   font-semibold">
          Trellow <span className="text-[#57428B] font-extrabold">.</span>
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
