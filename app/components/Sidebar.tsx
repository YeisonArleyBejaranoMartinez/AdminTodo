
import { CiBookmarkCheck, CiLogout } from "react-icons/ci";
import Image from 'next/image'
import { SidebarItem} from "./SidebarItem";
import Link from "next/link";
import { LiaStackExchange } from "react-icons/lia";


export const Sidebar = () => {
  const menuItem =[
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <CiBookmarkCheck size={30} />
    },
    {
      path: "/dashboard/rest-todos",
      name: "Rest TODOS",
      icon: <CiLogout size={30} />
    },
    {
      path: "/dashboard/server-todos",
      name: "server actions",
      icon: <LiaStackExchange size={30} />
    }

  ]

  return (
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="mx-6 px-6 py-4">
            <Link href="#">
              <Image
                src="https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg"
                alt="foto del rostro del usuario  "
                className="w-10 h-10 m-auto  object-cover lg:w-28 lg:h-28"
                width={150}
                height={40}
              />
            </Link>
          </div>
          <div className="mt-8 text-center">
            {/* Next/Image */}
            <Image
              src="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg"
              alt="foto del rostro del usuario  "
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
              width={100}
              height={100}
            />
              <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Cynthia J. Watts</h5>
              <span className="hidden text-gray-400 lg:block">Admin</span>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            {
              menuItem.map((item, index) => (
                <SidebarItem key={index} icon={item.icon} title={item.name} path={item.path} />
              ))
            }
            {/* TODO: src/components <SidebarItem /> */}
            {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}

          </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <CiLogout />
            <span className="group-hover:text-gray-700">Logout</span>
          </button>
        </div>
      </aside>
  )
}
