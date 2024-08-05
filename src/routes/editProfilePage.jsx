import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { CiEdit } from "react-icons/ci";
import { TbCameraPin } from "react-icons/tb";
import AppLayout from "../components/AppLayout";

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
      <AppLayout>
         <div className="w-full sm:container p-3 h-full items-center flex flex-col">
            <Card className="bg-background relative w-full sm:w-[70%] md:w-1/2 px-4 border-1 border-foreground-700">
               <div className="absolute bg-gradient-to-r from-secondary-600/20 to-primary-50/0 top-0 left-0 w-full h-20"></div>
               <CardHeader className="gap-3">
                  <TbCameraPin
                     fill="black"
                     size={100}
                     className="bg-foreground-200 rounded-full p-2"
                  />
                  Username
               </CardHeader>
               <CardBody>
                  <ul className="space-y-7">
                     <li className="text-xs">
                        <h3 className="font-semibold py-4">Account Details</h3>
                        <div className="w-full grid grid-cols-[0.5fr_1fr_auto]">
                           <p>Email Address</p>
                           <p> email.com</p>
                           <button>
                              <CiEdit />
                           </button>
                        </div>
                        <div className="w-full grid grid-cols-[0.5fr_1fr_auto]">
                           <p> Phone Number</p>
                           <p>13189371</p>
                           <button>
                              <CiEdit />
                           </button>
                        </div>
                     </li>
                     <li className="text-xs space-y-1">
                        <h3 className="font-semibold">Personal Details</h3>
                        {persondalD.map((p) => (
                           <div
                              className="w-full grid grid-cols-[0.8fr_auto] items-center"
                              key={p.label}
                           >
                              <p>{p.label}</p>{" "}
                              <Input
                                 size="sm"
                                 variant="flat"
                                 color="default"
                                 defaultValue={p.value}
                              />
                           </div>
                        ))}
                        <div className="w-full grid grid-cols-[0.5fr_1fr]">
                           <p>DOB (optional)</p>
                           <p> email.com</p>
                        </div>
                        <div className="w-full grid grid-cols-[0.5fr_1fr]">
                           <p>Gender (optional)</p>
                           <p> email.com</p>
                        </div>
                        <div></div>
                     </li>
                  </ul>
               </CardBody>
            </Card>
         </div>
      </AppLayout>
   );
};

export default EditProfilepage;
