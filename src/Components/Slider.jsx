
import { Link } from "react-router-dom";
const Slider = () => {
  return (
    <div className="flex justify-center items-center  bg-rose-200 px-4 ">
      <div className="flex  justify-center  flex-col  w-60 h-[12rem] gap-3 ">
        <Link to="/" className="text-blue-600">
          Home
        </Link>
        <Link to="/About" className="text-red-600">
          {" "}
          AboutUS
        </Link>
        <Link to="/Contact" className="text-blue-600">
          {" "}
          Contact
        </Link>
      </div>
    </div>
  );
}
export default Slider