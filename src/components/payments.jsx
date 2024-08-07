import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useState } from "react";

const paymentM = [
   {
      label: "UPI",
      options: [{ label: "Google Pay" }, { label: "Phone Pe" }],
   },
   {
      label: "Debit/Credit Card",
   },
   {
      label: "Net Banking",
   },
   {
      label: "Mobile Wallets",
   },
];

const DebitCard = () => (
   <div className="w-full sm:w-1/2 flex flex-col gap-4">
      <div className="grid grid-cols-[0.5fr_1fr] items-center gap-2">
         <span className="text-xs sm:text-md">Debit/Credit card</span>
         <Input
            size="sm"
            variant="bordered"
            color="secondary"
            placeholder="Card holder's Name"
         />
      </div>

      <div className="grid grid-cols-[0.5fr_1fr] items-center gap-2">
         <span className="text-xs sm:text-md">Card No.</span>
         <Input
            size="sm"
            variant="bordered"
            color="secondary"
            placeholder="Card Number"
         />
      </div>

      <div className="grid grid-cols-[0.5fr_1fr] items-center gap-2">
         <span className="text-xs sm:text-md">CVV</span>
         <Input
            size="sm"
            variant="bordered"
            color="secondary"
            placeholder="***"
         />
      </div>
   </div>
);

const Upi = ({ options }) => {
   const [pay, setPay] = useState(false);

   return (
      <div className="w-full">
         {pay ?
            <div className="flex flex-col gap-2 w-full sm:w-1/2">
               <Input placeholder="UPI id" radius="sm" variant="bordered" color="default" />
               <div className="flex gap-2 items-center">
                  <Button onClick={() => setPay(false)} radius="sm" variant="bordered" color="danger" size="sm">cancel</Button>
                  <Button variant="solid" color="success" radius="sm" size="s,">verify</Button>
               </div>
            </div> : <>
               {options.map((v, index) =>
                  <div className="flex flex-col w-full justify-start items-start">
                     <button key={index} onClick={() => setPay(a => !a)} className="py-2">
                        {v.label}
                     </button>
                  </div>
               )}
            </>}

      </div>
   )
}

const Payments = () => {
   return (
      <div>
         {paymentM.map((p, i) => (
            <Accordion key={i}>
               <AccordionItem title={p.label}>
                  <div className="w-full flex flex-col pl-4">
                     {p.label === "Debit/Credit Card" && <DebitCard />}
                     {p.label === "UPI" &&
                        p.options &&
                        <Upi options={p.options} />}
                  </div>
               </AccordionItem>
            </Accordion>
         ))}
      </div>
   );
};

export default Payments;
