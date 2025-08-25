import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { useGetVehicleByIdQuery } from "@/lib/services/vehicle-api";
import ViewForm from "./view-form";
import { ScrollArea } from "@/components/ui/scroll-area";

export function ViewVehicle({ vehicleId }) {
  const [isOpen, setIsOpen] = useState(false);
  const { data: vehicleData } = useGetVehicleByIdQuery(vehicleId);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <form>
        <DialogTrigger asChild>
          <button onClick={() => setIsOpen(true)}>
            <img
              src="/assets/svg/eye.svg"
              alt=""
              className="w-5 pt-2 cursor-pointer"
            />
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-[960px] bg-[#1D1D1D] ">
          <ScrollArea className="h-[calc(100vh-100px)] w-full ">
            <ViewForm formData={vehicleData?.data} setIsOpen={setIsOpen} />
          </ScrollArea>
        </DialogContent>
      </form>
    </Dialog>
  );
}
