import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LucidePlus } from "lucide-react";
import { useState } from "react";
import AddVehicleForm from "./add-vehicle-form";
import { BiSolidEdit } from "react-icons/bi";

export function AddVehicle({ isEdit = false, formData }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <form>
        <DialogTrigger asChild>
          {isEdit ? (
            <BiSolidEdit
              className="cursor-pointer text-gray-400 px-1"
              size={30}
            />
          ) : (
            <Button className="text-white">
              <LucidePlus />
              Add Vehicle
            </Button>
          )}
        </DialogTrigger>
        <DialogContent className="max-w-[960px] bg-[#1D1D1D] ">
          <AddVehicleForm
            setIsOpen={setIsOpen}
            isEdit={isEdit}
            formData={formData}
          />
        </DialogContent>
      </form>
    </Dialog>
  );
}
