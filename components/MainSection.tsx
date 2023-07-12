import { useContext, useEffect, useState } from "react";
import MeaningCard from "./MeaningCard";
import DisplayWord from "./DisplayWord";
import { ResponseData, ResponseError } from "@/types";
import { LineWave } from "react-loader-spinner";
import { ThemeContext } from "@/provider/theme";

function Main() {
  const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  const theme = useContext(ThemeContext);
  const [data, setData] = useState<ResponseData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ResponseError | null>(null);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const keyword = e.target.value;

    // //Reset State
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

  useEffect(() => {
    if (data) {
      setError(null);
    }

    if (loading) {
      setData(null);
      setError(null);
    }
  }, [data, error, loading]);

  return (
    <div className="p-2 px-4">
      <form className="px-4 py-5">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search a word..."
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
