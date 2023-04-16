import { useContext, useRef, useState } from "react";
import MeaningCard from "./MeaningCard";
import DisplayWord from "./DisplayWord";
import { ResponseData, ResponseError } from "@/types";
import { LineWave } from "react-loader-spinner";
import { ThemeContext } from "@/provider/theme";

function Main() {
  const inputRef = useRef<HTMLInputElement>(null);
  const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  const theme = useContext(ThemeContext);
  const [data, setData] = useState<ResponseData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ResponseError | null>(null);

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const keyword = inputRef.current?.value;
    //Check if keyword is empty
    if (!keyword) {
      return alert("Input cannot be empty!");
    }

    //Reset State
    setLoading(true);
    setData(null);
    setError(null);

    const data = await fetchingDictionary(keyword);
    setLoading(false);
    if (!Array.isArray(data)) {
      setError(data);
    } else {
      setData(data[0]);
    }
  }

  async function fetchingDictionary(keyword: string) {
    const res = await fetch(`${URL}${keyword}`);
    return res.json();
  }

  return (
    <div className="p-2 px-4">
      <form onSubmit={submitHandler} className="px-4 py-5">
        <input
          ref={inputRef}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full font-normal text-lg text-slate-700 bg-gray-100 "
        />
      </form>

      {loading && (
        <div className=" py-20 flex justify-center">
          <LineWave
            height={150}
            width={150}
            color={theme === "light" ? "#000" : "#fff"}
          />
        </div>
      )}

      {error && (
        <div className="py-7">
          <h1 className="text-3xl font-semibold mb-5">Oops! {error.title}</h1>
          <p className="text-lg tracking-wide leading-5">{error.message}</p>
        </div>
      )}

      {data && (
        <div>
          <DisplayWord
            word={data.word}
            phonetic={data.phonetic}
            phonetics={data.phonetics}
          />
          {data.meanings.map((meaning) => (
            <MeaningCard key={meaning.partOfSpeech} meaning={meaning} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Main;
