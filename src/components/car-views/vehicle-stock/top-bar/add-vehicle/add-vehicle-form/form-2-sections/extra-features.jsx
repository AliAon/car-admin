import { AccordionContent } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const ExtraFeatures = ({ handleChange, formData }) => {
  return (
    <>
      <AccordionContent className="text-white bg-[#242424] grid grid-cols-2 gap-4">
        <div className="pl-[2px]">
          <Label className="text-white mt-4">YouTube Link</Label>
          <Input
            onChange={handleChange}
            value={formData?.extrafuture?.youtubeLink}
            name="extrafuture.youtubeLink"
            className="bg-[#1D1D1D] border-[#242424] text-[#4F6374]"
            placeholder="Insert a link"
          />
        </div>
        <div></div>
      </AccordionContent>
    </>
  );
};

export default ExtraFeatures;
