import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { useSearchParams } from "react-router-dom";
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
         <DropdownMenuContent className="z-50 bg-zinc-950 rounded-xl p-4 w-52 sm:min-w-96">
            <Accordion>
               {filters.map((f, i) => (
                  <AccordionItem
                     key={i}
                     aria-label={f.f}
                     title={f.f}
                     className="text-xs"
                  >
                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[1fr_1fr_1fr_1fr] gap-2">
                        {f.values.map((v) => (
                           <Toggle
                              defaultPressed={true}
                              variant={"outline"}
                              key={v}
                              className="text-xs hover:bg-transparent rounded-xl"
                              aria-label={v}
                           >
                              <button className="p-1">{v}</button>
                           </Toggle>
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
