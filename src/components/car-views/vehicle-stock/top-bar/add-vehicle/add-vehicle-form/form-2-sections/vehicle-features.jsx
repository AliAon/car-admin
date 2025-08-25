import { AccordionContent } from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import {
  colorOptions,
  interiorColorOptions,
  vehicleDoorOptions,
} from "../form-static-data";
import { Input } from "@/components/ui/input";
import CustomColorSelect from "./CustomColorSelect";

const VehicleFeatures = ({ setFormData, formData }) => {
  const [isManual, setIsManual] = useState(false);
  return (
    <>
      <AccordionContent className="grid grid-cols-2 px-[2px] gap-2">
        {/* color  */}
        {/* <div className="mt-5">
          <Label className="text-white mt-4">Colour *</Label>
          <Select
            onValueChange={(value) =>
              setFormData("vehicleFeature.colour", value)
            }
            value={formData?.vehicleFeature?.colour}
          >
            <SelectTrigger className="bg-[#1D1D1D] border-[#242424] text-[#4F6374] w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-[#1D1D1D] border-[#242424] text-[#4F6374]">
              <SelectGroup>
               <div>
                 <Input
                  type="text"
                  className="bg-[#1D1D1D] border-[#242424] text-[#4F6374] my-3 pl-8"
                  placeholder="Enter Manual Colour"
                />
               </div>
                {colorOptions.map((door) => (
                  <div className="" key={door}>
                    <SelectItem value={door}>{door}</SelectItem>
                  </div>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div> */}
        <CustomColorSelect
          formData={formData}
          setFormData={setFormData}
          colorOptions={colorOptions}
          isManual={isManual}
          setIsManual={setIsManual}
        />
        <div className="mt-5">
          <Label className="text-white mt-4">Interior colour *</Label>
          <Select
            onValueChange={(value) =>
              setFormData("vehicleFeature.interiorColour", value)
            }
            value={formData.vehicleFeature.interiorColour}
          >
            <SelectTrigger className="bg-[#1D1D1D] border-[#242424] text-[#4F6374] w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-[#1D1D1D] border-[#242424] text-[#4F6374] pt-3">
              {colorOptions.map((door) => (
                <SelectItem value={door}>{door}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </AccordionContent>
    </>
  );
};

export default VehicleFeatures;
