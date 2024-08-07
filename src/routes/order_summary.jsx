import { Accordion, AccordionItem } from "@nextui-org/accordion";
import AppLayout from "../components/AppLayout";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import Payments from "../components/payments";

const price = [
   { label: "Ticket(s) price", value: 240 },
   {
      label: "Convenience free",
      value: 30,
      details: [
         { label: "Base amount", value: 20 },
         { label: "GST", value: 10 },
      ],
   },
];

// const paymentM = [
//    {
//       label: "UPI",
//       options: [{ label: "Google Pay" }, { label: "Phone Pe" }],
//    },
//    {
//       label: "Debit Card . Credit Card",
//    },
//    {
//       label: "Net Banking",
//    },
//    {
//       label: "Mobbile Wallets",
//    },
// ];

const OrderSummary = () => {
   const [payM, setPayM] = useState({ paymentMode: null, details: null });
   return (
      <AppLayout>
         <div className="w-full sm:w-1/2 mx-auto flex flex-col py-4 gap-5 px-2">
            <h3 className="text-xl mb-3">Order Summary</h3>

            <div className="flex flex-col gap-1 p-3 bg-foreground-900/50 rounded-xl">
               <h4 className="flex text-sm sm:text-xl justify-between items-center">
                  Deadpool & Wolverine <span>1</span>
               </h4>
               <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-medium">
                     {new Intl.DateTimeFormat("en-GB", {
                        dateStyle: "long",
                     }).format(Date.now())}
                  </span>
                  |
                  <span className="text-xs sm:text-medium">
                     {new Intl.DateTimeFormat("en-GB", {
                        timeStyle: "short",
                     }).format(Date.now())}
                  </span>
                  <span className="text-sm text-foreground-400">
                     English 2d
                  </span>
               </div>
            </div>

            <ul className="flex flex-col gap-1 p-3 bg-foreground-900/50 rounded-xl">
               {price.map((p, i) => (
                  <>
                     <li
                        key={i}
                        className="flex w-full items-center justify-between"
                     >
                        <p>{p.label}</p> <p>{p.value}</p>
                     </li>
                     <ul className="pl-3 text-foreground-400">
                        {p.details &&
                           p.details.length >= 0 &&
                           p.details.map((v) => (
                              <li
                                 key={v}
                                 className="flex w-full justify-between"
                              >
                                 <p>{v.label}</p>
                                 <p>{v.value}</p>
                              </li>
                           ))}
                     </ul>
                  </>
               ))}
            </ul>

            <div className="flex justify-between items-center border-t-1 border-foreground-800 pt-1">
               <p className="text-md font-medium">Order Total</p>
               <p>
                  {price.reduce((total, current) => {
                     // Add the current value
                     total += current.value;

                     // Add nested details values if they exist
                     if (current.details) {
                        total += current.details.reduce(
                           (detailTotal, detail) => {
                              return detailTotal + detail.value;
                           },
                           0,
                        );
                     }

                     return total;
                  }, 0)}
               </p>
            </div>

            <div className="w-full bg-foreground-800/20 p-3 rounded-xl">
               <div className="flex gap-2 items-center mb-2">
                  <h4 className="text-sm font-medium">Your Details</h4>
                  <span className="text-xs sm:text-medium text-foreground-400">
                     (for sending booking details)
                  </span>
               </div>
               <div className="w-full flex items-center gap-2 justify-between">
                  <span className="text-sm sm:text-md">Email</span>
                  <span className="text-xs sm:text-sm">email@.com</span>
               </div>
               <div className="w-full flex items-center justify-between gap-2">
                  <span className="text-sm sm:text-md">Phone</span>
                  <span className="text-xs sm:text-sm">12331312</span>
               </div>
            </div>

            <div className="w-full bg-foreground-800/20 p-3 rounded-xl">
               <h4 className="text-sm font-medium">Payment Method</h4>
               <Payments />
            </div>

            <div>
               <Button variant="solid" color="success">
                  PAY
               </Button>
            </div>
         </div>
      </AppLayout>
   );
};
export default OrderSummary;
