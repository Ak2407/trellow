import Sidebar from "../_components/Sidebar";

const OrganizationalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="pt-20 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl ">
      <div className="flex gap-x-7">
        <div className="w-64 shrink-0 hidden md:block">
          <Sidebar />
        </div>
        {/* {children} */}
        <div className="w-full">{children}</div>
      </div>
    </main>
  );
};

export default OrganizationalLayout;
