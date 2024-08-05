import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Chip } from "@nextui-org/chip";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { useSearchParams } from "react-router-dom";

const filters = [
   { f: "languages", values: ["Hindi", "English", "Telegu", "Marathi"] },
   { f: "genre", values: ["Action", "Adventure", "Horror", "Fantasy"] },
   { f: "type", values: ["full HD", "4k"] },
];

const MovieFilter = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const [lang, setLang] = useState([]);

   const setParams = (key, param) => {
      const v = searchParams.get(key);
      if (v === param) return;
      searchParams.set(key, param);
      setSearchParams(searchParams);
   };

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
                           <Chip
                              onClick={() => {
                                 setParams(f.f, v);
                              }}
                              color="danger"
                              variant={`${searchParams.get(f.f) === v ? "solid" : "flat"}`}
                              className="cursor-pointer text-xs"
                           >
                              {v}
                           </Chip>
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
