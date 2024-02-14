"use client";
import { GlobalContext } from "@/context";
import { LayoutDashboard } from "lucide-react";
import { ParkingCircle } from "lucide-react";
import { Users } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";
import { usePathname, useRouter } from "next/navigation";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <LayoutDashboard size={25} />,
  },
  {
    id: "products",
    label: "Product",
    path: "/products",
    icon: <ParkingCircle size={25} />,
  },
  {
    id: "visitors",
    label: "Visitors",
    path: "/visitors",
    icon: <Users size={25} />,
  },
];

export default function Sidebar() {

  const { sideBarOpen, setSideBarOpen } =useContext(GlobalContext);

  const pathName = usePathname();
  const router = useRouter();

  const handlenavigate = (getMenuItem) => {
    if(status === 'unauthenticated') {
      router.push('/unauth-page')
      return
    }
    router.push(getMenuItem.path);
  };
  return (
    <aside
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear lg:static lg:translate-x-0
  ${sideBarOpen ? "translate-x-0" : "-translate-x-full"}
  `}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href={"/"} className="text-[40px] text-white">
          Analytics
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {menuItems.map((menuItem) => (
                <li key={menuItem.id}>
                  <label
                    onClick={() => handlenavigate(menuItem)}
                    className={`group relative cursor-pointer flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark 
                             ${pathName.includes(menuItem.id) && "bg-graydark"}
                            `}
                  >
                    {menuItem.icon}
                    {menuItem.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
}