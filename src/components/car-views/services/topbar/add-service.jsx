import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LucidePlus } from "lucide-react";
import { useState } from "react";
import ServiceUploadCard from "./service-upload";
import { BiSolidEdit } from "react-icons/bi";

export default function AddService({ isEdit = false, formData }) {
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
              Add Service
            </Button>
          )}
        </DialogTrigger>
        <DialogContent className="max-w-[960px] max-h-[95vh] overflow-y-auto bg-[#1D1D1D] pt-10">
          <div className=" ">
            <span className="flex items-start  gap-4">
              <img src="/assets/svg/upload.svg" className="w-14" alt="" />
              <span>
                <p className="text-base text-white">Upload files</p>
                <span className="text-base text-[#A9ACB4] ">
                  Select and upload the files of your choice <br />
                  image diamension: 828 x 536 px
                </span>
              </span>
            </span>
          </div>
          <ServiceUploadCard
            setIsOpen={setIsOpen}
            formData={formData}
            isEdit={isEdit}
          />
        </DialogContent>
      </form>
    </Dialog>
  );
}
