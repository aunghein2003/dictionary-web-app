import { ThemeContext } from "@/provider/theme";
import { Phonetics } from "@/types";
import { useContext } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";

interface Props {
  word: string;
  phonetic: string | undefined;
  phonetics: Phonetics[];
}

function DisplayWord({ word, phonetic, phonetics }: Props) {
  const theme = useContext(ThemeContext);
  const phoneticWord = phonetic
    ? phonetic
    : phonetics.find((p) => typeof p.text !== "undefined" && p.text.length > 0)!
        ?.text; //Finding a phonetic word in an array of object
  const audio = phonetics.find(
    (p) => typeof p.audio !== "undefined" && p.audio.length > 0
  )?.audio; //Finding an audio mp3 in an array of object

  return (
    <div className="py-5 flex justify-between items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-semibold">{word}</h1>
        <p
          className={`py-4 text-xl font-normal ${
            theme === "light" ? "text-purple-700" : "text-purple-400"
          }`}
        >
          {phoneticWord}
        </p>
      </div>
      {audio && (
        <div className=" cursor-pointer">
          <BsFillPlayCircleFill
            className="text-5xl bg-purple-600 border-none rounded-full text-purple-300 hover:text-purple-400 active:text-purple-500 transition-colors duration-100"
            onClick={() => {
              new Audio(audio).play();
            }}
          />
        </div>
      )}
    </div>
  );
}

export default DisplayWord;
