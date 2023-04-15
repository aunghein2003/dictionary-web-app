import { ThemeContext } from "@/provider/theme";
import { Meanings } from "@/types";
import { Courgette } from "next/font/google";
import { useContext } from "react";

const courgette = Courgette({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
});

interface Props {
  meaning: Meanings;
}

function MeaningCard({ meaning }: Props) {
  const theme = useContext(ThemeContext);

  return (
    <div className="overflow-hidden mb-8">
      <div className={courgette.className}>
        <h3 className="relative text-2xl font-[900] after:content-[' '] after:absolute after:w-screen after:h-[1px] after:mx-7 after:top-5 after:bg-slate-300">
          {meaning.partOfSpeech}
        </h3>
      </div>
      <div className="py-5">
        <h3
          className={`text-lg ${
            theme === "light" ? "text-slate-500" : "text-slate-300"
          }`}
        >
          Meaning
        </h3>
        <ul className="p-3 px-8 space-y-3 list-disc list-outside tracking-wide">
          {meaning.definitions.map((def) => (
            <li key={def.definition}>{def.definition}</li>
          ))}
        </ul>
      </div>
      {meaning.synonyms.length > 0 && (
        <div className="flex gap-x-7">
          <h3
            className={`text-lg ${
              theme === "light" ? "text-slate-500" : "text-slate-300"
            }`}
          >
            Synonyms
          </h3>
          {meaning.synonyms.map((synonym) => (
            <h3 key={synonym} className="font-semibold text-lg text-purple-500">
              {synonym}
            </h3>
          ))}
        </div>
      )}
    </div>
  );
}

export default MeaningCard;
