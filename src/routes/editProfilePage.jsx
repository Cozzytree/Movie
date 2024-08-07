import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { CiEdit } from "react-icons/ci";
import { TbCameraPin } from "react-icons/tb";
import Text from "../components/text.tsx";
import { useState } from "react";
import { Link } from "react-router-dom";

const persondalD = [
   {
      label: "First Name",
      value: "Name",
   },
   {
      label: "Last Name",
      value: "Name",
   },
];

const EditProfilepage = () => {


   return (
      <div className="w-full sm:container p-1 h-full items-center flex flex-col">
         <Card className="bg-background relative w-full sm:w-[70%] md:w-1/2 px-4 border-1 border-foreground-700">
            <div className="absolute bg-gradient-to-r from-secondary-600/20 to-primary-50/0 top-0 left-0 w-full h-16"></div>
            <CardHeader className="gap-3">
               <TbCameraPin
                  fill="black"
                  className="bg-foreground-200 rounded-full p-2 w-20 h-20"
               />
               Username
            </CardHeader>
            <CardBody>
               <ul className="space-y-7">
                  <li className="text-xs">
                     <h3 className="font-semibold py-4 text-sm sm:text-lg">Account Details</h3>
                     <div className="w-full grid grid-cols-[0.5fr_1fr_auto]">
                        <Text text={"Email Address"} variant="primary" />
                        <Text text={"Email.com"} variant="secondary" />

                        <Link to={"/my_profile/verify/email"}>
                           <button>
                              <CiEdit />
                           </button>
                        </Link>
                     </div>
                     <div className="w-full grid grid-cols-[0.5fr_1fr_auto]">
                        <Text text={"Phone Numbe"} variant="primary" />
                        <Text text={"13189371"} variant="secondary" />
                        <Link to={"/my_profile/verify/phone"}>
                           <button>
                              <CiEdit />
                           </button>
                        </Link>
                     </div>
                  </li>
                  <li className="text-xs space-y-1">
                     <h3 className="font-semibold text-sm sm:text-lg">Personal Details</h3>
                     {persondalD.map((p) => (
                        <div
                           className="w-full grid grid-cols-[0.5fr_1fr] items-center"
                           key={p.label}
                        >
                           <p>{p.label}</p>
                           <Input
                              size="sm"
                              variant="flat"
                              color="default"
                              defaultValue={p.value}
                           />
                        </div>
                     ))}
                     <div className="w-full grid grid-cols-[0.5fr_1fr]">
                        <Text text={"DOB (optional)"} variant="primary" />
                        <Text text={"12/12/34124"} variant="secondary" />

                     </div>

                     <div className="w-full grid grid-cols-[0.5fr_1fr]">
                        <Text text={"Gender (optional)"} variant="primary" />
                        <Text text={"email.com"} variant="secondary" />
                     </div>

                  </li>
               </ul>
            </CardBody>
         </Card>
      </div>

   );
};

export default EditProfilepage;
