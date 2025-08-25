import React, { useState } from "react";
import { LucidePlus } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import VideoUploadCard from "../video-list/video-uploader";

export default function UploadVideo() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <form>
        <DialogTrigger asChild>
          <Button className="text-white">
            <LucidePlus />
            Add Video
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
                  video diamension: 405 x 720 px
                </span>
              </span>
            </span>
          </div>
          <VideoUploadCard setIsOpen={setIsOpen} />
        </DialogContent>
      </form>
    </Dialog>
  );
}
