import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Button } from "@nextui-org/button";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { CiFilter } from "react-icons/ci";

const filters = [
   { f: "languages", values: ["Hindi", "English"] },
   { f: "genre", values: ["Action", "Adventute"] },
   { f: "type", values: ["full HD", "3k"] },
];

const MovieFilter = () => {
   return (
      <DropdownMenu>
         <DropdownMenuTrigger className="flex items-center gap-1">
            <CiFilter />
            Filter
            {/* <Button
               type="button"
               variant="ghost"
               color="primary"
               startContent={<CiFilter />}
            >
               Filter
            </Button> */}
         </DropdownMenuTrigger>
         <DropdownMenuContent className="z-50 bg-zinc-900 rounded-xl p-4 min-w-60">
            <Accordion>
               {filters.map((f, i) => (
                  <AccordionItem key={i} aria-label={f.f} title={f.f}>
                     {f.values.map((v) => (
                        <p key={v}>{v}</p>
                     ))}
                  </AccordionItem>
               ))}
            </Accordion>
         </DropdownMenuContent>
      </DropdownMenu>
   );
};

export default MovieFilter;
