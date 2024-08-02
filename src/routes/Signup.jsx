import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import AppLayout from "../components/AppLayout";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Link } from "react-router-dom";

const inputs = [
   { type: "email", label: "Enter your email" },
   { type: "password", label: "Enter password" },
   { type: "password", label: "COnfirm password" },
];

const SignUp = () => {
   return (
      <AppLayout>
         <div className="flex w-full h-screen justify-center items-center">
            <Card
               isBlurred
               className="bg-transparent h-fit px-5 py-2 shadow-secondary-900/40 shadow-md"
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
                              size="md"
                              placeholder={v.label}
                              labelPlacement="outside"
                           />
                        ))}
                     </div>
                     <div className="w-full flex justify-center items-center">
                        <Button variant="shadow" color="secondary" size="md">
                           Sign Up
                        </Button>
                     </div>
                  </form>
               </CardBody>
               <CardFooter>
                  <p className="text-sm font-sans">
                     ALready have an account ?{" "}
                     <Link
                        to={"/sign_in"}
                        className="text-sm text-purple-400 hover:underline transition-all"
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
