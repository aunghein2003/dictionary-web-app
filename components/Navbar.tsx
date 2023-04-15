import { ThemeContext } from "@/provider/theme";
import { FontsType } from "@/types";
import { useContext } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { RiBook2Line } from "react-icons/ri";

interface Props {
  toggleTheme: () => void;
  font: FontsType;
  setFont: React.Dispatch<React.SetStateAction<FontsType>>;
}

function Navbar({ toggleTheme, font, setFont }: Props) {
  const theme = useContext(ThemeContext);

  return (
    <div className="flex justify-between items-center p-2 px-4">
      <div className={`text-4xl`}>
        <RiBook2Line />
      </div>
      <div className="flex items-center justify-between basis-1/2">
        <div className="basis-1/3 min-w-max">
          <select
            className={`select select-ghost w-full max-w-xs bg-inherit border-none`}
            value={font}
            onChange={(e) => setFont(e.target.value as FontsType)}
          >
            <option value="serif">Serif</option>
            <option value="sans">Sans-serif</option>
            <option value="mono">Mono</option>
          </select>
        </div>
        <div className="basis-1/3 flex items-center gap-5">
          <input
            type="checkbox"
            className="toggle "
            onClick={toggleTheme}
            data-toggle-theme="light,dark"
            data-act-class="ACTIVECLASS"
          />
          {theme === "light" ? (
            <FiMoon className="text-3xl text-slate-500" />
          ) : (
            <FiSun className="text-3xl text-amber-300" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
