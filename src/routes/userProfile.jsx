import Applayout from "../components/AppLayout";
import { FaFirstOrder } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { Link } from "react-router-dom";

const settings = [
   { label: "Your Orders", path: "", icons: <FaFirstOrder /> },
   { label: "Account Settings", path: "", icons: <FaGear /> },
];

const UserProfilePage = () => {
   return (
      <Applayout>
         <div className="flex flex-col w-full sm:container mx-auto h-full py-3">
            <div className="mb-5">
               <h1>UserName</h1>
               <Link
                  to={"/my_profile/edit"}
                  className="text-foreground-400 text-xs cursor-pointer"
               >
                  Edit profile
               </Link>
            </div>

            {/* <footer>footer</footer> */}
            <div className="w-full flex flex-col">
               {settings.map((s) => (
                  <Link
                     key={s.label}
                     className="w-full flex gap-2 mb-3 border-b items-center border-transparent hover:border-foreground-700"
                  >
                     {s.icons} {s.label}
                  </Link>
               ))}
            </div>
         </div>
      </Applayout>
   );
};

export default UserProfilePage;
