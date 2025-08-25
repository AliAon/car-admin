import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LucidePlus } from "lucide-react";
import { useState } from "react";
import ImageUploadCard from "./image-upload-card";

export default function UploadImage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <form>
        <DialogTrigger asChild>
          <Button className="text-white">
            <LucidePlus />
            Add Image
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[960px] bg-[#1D1D1D] ">
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
          <ImageUploadCard setIsOpen={setIsOpen} />
        </DialogContent>
      </form>
    </Dialog>
  );
}
