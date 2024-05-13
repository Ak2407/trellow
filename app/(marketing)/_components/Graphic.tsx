import Image from "next/image";
import Landing from "@/public/landing.png";

const Graphic = () => {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src={Landing}
        width={683}
        height={606}
        alt="hero_img"
        className=" ml-auto "
      />
      <h1 className="text-2xl font-extralight">Kanban Board</h1>
      <h1 className="text-lg text-slate-500 lg:w-[70%]">
        Streamline your workflow and boost productivity with our comprehensive
        Kanban board, designed to effortlessly organize tasks, prioritize
        projects, and empower you to stay focused and efficient.
      </h1>
    </div>
  );
};

export default Graphic;
