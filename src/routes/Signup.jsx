import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import AppLayout from "../components/AppLayout";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Link } from "react-router-dom";
import ls from "../assets/ls.svg";

const inputs = [
   { type: "email", label: "Enter your email" },
   { type: "password", label: "Enter password" },
   { type: "password", label: "COnfirm password" },
];

const SignUp = () => {
   return (
      <AppLayout>
         <div className="flex w-full h-screen justify-center items-center">
            <div className="fixed top-0 left-0 h-screen w-screen">
               <img src={ls} className="w-full h-full" />
            </div>
            <Card
               isBlurred
               className="bg-transparent shadow-lg shadow-[#300000] h-fit px-5 py-2"
               radius="sm"
            >
               <CardHeader>
                  <div>
                     <span>Welcome</span>
                     <h1 className="font-semibold text-xl tracking-wider">
                        To BOLETO
                     </h1>
                  </div>
               </CardHeader>

               <CardBody>
                  <form className="flex flex-col w-full gap-4">
                     <div className="flex flex-col items-center justify-center gap-2 w-full">
                        {inputs.map((v, i) => (
                           <Input
                              key={i}
                              label={
                                 v.type.charAt(0).toUpperCase() +
                                 v.type.substring(1)
                              }
                              type={v.type}
                              variant="underlined"
                              size="sm"
                              placeholder={v.label}
                              labelPlacement="outside"
                              className="text-xs"
                           />
                        ))}
                     </div>
                     <div className="w-full flex justify-center items-center">
                        <Button
                           type="submit"
                           color="primary"
                           variant="shadow"
                           className="text-primary-900"
                        >
                           Sign In
                        </Button>
                     </div>
                  </form>
               </CardBody>
               <CardFooter>
                  <p className="text-sm font-sans">
                     ALready have an account ?{" "}
                     <Link
                        to={"/sign_in"}
                        className="text-sm text-primary-400 hover:underline transition-all"
                     >
                        Sign In
                     </Link>
                  </p>
               </CardFooter>
            </Card>
         </div>
      </AppLayout>
   );
};

export default SignUp;
