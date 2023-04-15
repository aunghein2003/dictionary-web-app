import { BiMoon } from "react-icons/bi";
import { RiBook2Line } from "react-icons/ri";

function Navbar() {
  return (
    <div className="flex justify-between items-center p-2 px-4">
      <div className="text-4xl text-slate-500">
        <RiBook2Line />
      </div>
      <div className="flex items-center justify-between basis-1/2">
        <div className="basis-2/3 min-w-max">
          <select className="select select-ghost w-full max-w-xs bg-inherit border-none">
            <option selected>Serif</option>
            <option>Sans-serif</option>
            <option>Mono</option>
          </select>
        </div>
        <div className="basis-1/3 flex items-center gap-5">
          <input type="checkbox" className="toggle" />
          <BiMoon className="text-3xl" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
