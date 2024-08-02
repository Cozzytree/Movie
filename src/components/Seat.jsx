import { Button } from "@nextui-org/button";
import { useState } from "react";

const Seat = ({ isBooked }) => {
   return (
      <Button
         isDisabled={book}
         size="sm"
         color="secondary"
         variant={`${s.isAvailable ? "solid" : "bordered"}`}
         className="rounded-md"
      >
         {s.seat}
      </Button>
   );
};

return Seat;
