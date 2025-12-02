"use client";
import Link from "next/link";
import { CiBookmarkCheck, CiLogout } from "react-icons/ci";
import { usePathname } from "next/navigation";
import * as path from 'node:path';
interface Props {
  icon: React.ReactNode;
  title: string;
  path: string;
}
export const SidebarItem = ({icon, title, path}: Props) => {
  const pathname = usePathname();
  const items = [
    {
      icon: <CiBookmarkCheck size={30} />,
      title: "Dashboard",
      link: "./rest-todos",
    },
    {
      icon: <CiLogout size={30} />,
      title: "Categories",
      link: "#",
    },
  ];
  return (
    <>
      {
      <li>
        <Link
          href={path}
          className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-600  hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 hover:text-white
          ${path === pathname ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400" : ""}
          `
          }
        >
         {icon}
          <span className="-mr-1 font-medium">{title}</span>
        </Link>
      </li>
      }



    </>
  );
};
