import { Card, CardBody, CardHeader } from "@nextui-org/card";
import AppLayout from "../components/AppLayout";
import { Input } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/checkbox";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Link } from "react-router-dom";
import lines from "../assets/lines.svg";
import { Image } from "@nextui-org/image";
import Brand from "../components/brand";

const SignIn = () => {
   const [email, setEmail] = useState("");
   const [isShow, setShow] = useState(false);
   return (
      <AppLayout>
         <div className="relative w-full mx-auto h-[100dvh] flex justify-center items-center px-5 overflow-hidden">
            <div className="fixed top-0 left-0 p-2">
               <Brand />
            </div>
            <div className="border-opacity-10 fixed top-0 left-0 h-[100dvh] w-screen">
               <Image
                  src={lines}
                  isBlurred
                  className="h-[100dvh] w-screen object-cover"
               />
            </div>
            <Card
               isBlurred
               className="bg-transparent backdrop-blur-sm h-fit px-5 py-2"
               radius="sm"
            >
               <CardHeader className="flex flex-col items-start">
                  <span>Hello</span>
                  <h1 className="font-bold text-2xl uppercase tracking-wide">
                     Welcome Back
                  </h1>
               </CardHeader>
               <CardBody className="">
                  <form className="flex flex-col gap-6">
                     <div className="flex flex-col gap-2 w-full">
                        <Input
                           size="sm"
                           type="email"
                           label="Email"
                           radius="lg"
                           color="default"
                           variant="bordered"
                        />
                        <Input
                           size="sm"
                           type={isShow ? "text" : "password"}
                           label="Password"
                           radius="lg"
                           variant="bordered"
                           color="default"
                        />
                        <div className="flex flex-col sm:flex-row justify-between">
                           <Checkbox
                              onChange={() => setShow((e) => !e)}
                              defaultChecked={isShow}
                              size="sm"
                              className="text-xs"
                           >
                              Show Password
                           </Checkbox>
                           <Link
                              to={"#"}
                              className="text-primary-400 hover:underline transition-all duration-150 text-sm"
                           >
                              forgot password?
                           </Link>
                        </div>
                     </div>

                     <div className="flex justify-center items-center w-full">
                        <Button
                           type="submit"
                           color="primary"
                           variant="shadow"
                           className="text-primary-900"
                        >
                           Sign In
                        </Button>
                     </div>
                     <p className="text-sm">
                        Don't have an account?{" "}
                        <Link
                           to={"/sign_up"}
                           className="text-primary-500 hover:underline duration-150 transition-all"
                        >
                           Signup now
                        </Link>
                     </p>
                  </form>
               </CardBody>
            </Card>
         </div>
      </AppLayout>
   );
};

export default SignIn;
