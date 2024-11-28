import DesktopSidebar from "./components/desktopSidebar";
import Navbar from "./components/navbar";

export default function LayoutOne({
  children,
  sidebar = true,
}: {
  children: React.ReactNode;
  sidebar?: boolean;
}) {
  return sidebar ? (
    <div>
      <Navbar />
      <div className=" min-h-[calc(100vh-80px)] h-full   flex flex-row">
        <DesktopSidebar />
        {children}
      </div>
    </div>
  ) : (
    <div>
      <Navbar />
      <div className=" relative min-h-[calc(100vh-80px)] h-full   flex flex-row">
        {children}
      </div>
    </div>
  );
}
