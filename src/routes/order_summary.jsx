import { useState } from "react";
import AppLayout from "../components/AppLayout";
import Text from "../components/text"
import { Button } from "@nextui-org/button";
import { useNavigate } from "react-router-dom";

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

const OrderSummary = () => {
   const [ticType, setTicType] = useState("m-type")
   const naviagate = useNavigate()
   return (
      <AppLayout>
         <div className="mt-20 w-full mx-auto sm:container px-3 flex flex-col items-center">
            <div className="bg-foreground-800/50 w-full relative sm:w-96 rounded-xl overflow-x-hidden">

               <div className="absolute top-1/2 -left-4 w-7 h-7 bg-background rounded-full" />
               <div className="absolute top-1/2 -right-4 w-7 h-7 bg-background rounded-full" />

               <h3 className="px-3 py-3 text-xl mb-3 font-semibold font-mono tracking-wide uppercase text-primary-300">Booking Summary</h3>

               <div className="px-4">
                  <ul className="space-y-2">
                     <li>
                        <div className="flex items-center justify-between">
                           <Text text={"Ticket name (1 ticket)"} variant="primary" />
                           <Text text={"Rs. 220"} variant="primary" />
                        </div>
                     </li>
                     <li className=" flex items-center justify-between ml-2">
                        <p>Convenience fee</p>
                        <Text text={"Rs. 30"} variant="primary" />
                     </li>

                     <li className="flex items-center border-t-1 justify-between">
                        <Text text={"Sub-total"} variant="primary" />
                        <Text text={"250"} variant="primary" />
                     </li>
                  </ul>

                  <div className="flex w-full py-2 px-1 rounded-lg justify-between items-center mt-4 font-semibold text-lg">
                     <h5>Amount Payable</h5>
                     <spa>Rs. 250</spa>
                  </div>
               </div>
            </div>

            <div className="mt-4 w-full sm:w-96">
               <h3 className="text-foreground-400 text-center font-mono uppercase tracking-wide font-semibold text-lg">Select ticket type</h3>
               <div className="flex justify-between gap-2 items-center">
                  <Button onClick={(() => setTicType("m-type"))} className="w-full" radius="sm" variant={`${ticType === "m-type" ? "solid" : "flat"}`}>M-Type</Button>
                  <Button onClick={(() => setTicType("office-type"))} className="w-full" radius="sm" variant={`${ticType === "office-type" ? "solid" : "flat"}`}>Box-Office</Button>
               </div>
            </div>

            <div className="sm:w-96 w-full">
               <Button onClick={() => naviagate("/payment")} className="mt-4 flex w-full justify-between" color="success" size="md" radius="sm">
                  <span >
                     Total Rs. 250</span> Proceed</Button>
            </div>
         </div>
      </AppLayout>
   );
};

export default OrderSummary;
