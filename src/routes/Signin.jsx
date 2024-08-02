import { Card, CardBody, CardHeader } from "@nextui-org/card";
import AppLayout from "../components/AppLayout";
import { Input } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/checkbox";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Link } from "react-router-dom";
import ls from "../assets/ls.svg";

const SignIn = () => {
   const [email, setEmail] = useState("");
   const [isShow, setShow] = useState(false);
   return (
      <AppLayout>
         <div className="w-full mx-auto min-h-screen flex justify-center items-center px-5">
            <div className="fixed top-0 left-0 h-screen w-screen">
               <img src={ls} className="w-full h-full" />
            </div>
            <Card
               isBlurred
               className="bg-transparent shadow-lg shadow-[#300000] h-fit px-5 py-2"
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
