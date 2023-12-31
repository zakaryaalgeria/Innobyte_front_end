
import {Outlet} from 'react-router-dom'
import { SideBar1 } from '../components/user/SideBar1'
import { NavBar2 } from '../components/user/NavBar2'

export const ProjectLayout = () => {
  return (
    <div className="flex">
      <SideBar1/>
      <div className="relative  ml-auto w-[calc(100vw-100px)]">
        <NavBar2/>
        <div className="pt-[73.5px] bg-[#F3F4F6] w-full min-h-[100vh] rounded-xl ">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
