import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { useSearchParams } from "react-router-dom";
import { Chip } from "@nextui-org/chip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { CiFilter } from "react-icons/ci";
import { Toggle } from "./toggle";
import { useState } from "react";

const filters = [
  { f: "languages", values: ["Hindi", "English", "Telegu", "Marathi"] },
  { f: "genre", values: ["Action", "Adventure", "Horror", "Fantasy"] },
  { f: "type", values: ["full HD", "3k"] },
];

const MovieFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [lang, setLang] = useState([]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1">
        <CiFilter />
        Filter
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-50 bg-zinc-950 rounded-xl p-4 w-[16em]">
        <Accordion>
          {filters.map((f, i) => (
            <AccordionItem
              key={i}
              aria-label={f.f}
              title={f.f}
              className="text-xs"
            >
              <div className="w-full flex flex-wrap items-center gap-2">
                {f.values.map((v) => (
                  <Toggle className="rounded-[4em] w-fit h-fit p-[0.5em] text-xs" defaultPressed={true}>{v}</Toggle>
                ))}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MovieFilter;
