import Navbar from "./Navbar"
import Slider from "./Slider"
import {Outlet} from "react-router-dom"

const Layout = () => {
  return (
    <div className="border-solid border-2 border-indigo-600 rounded-md">
      <Navbar />

      <div className="  flex flex-row h-[12rem] w-full">
        <div className="">
          <Slider />
        </div>

        <div className="bg-yellow-300 w-full border-solid border-2 border-indigo-600 rounded-md ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default Layout