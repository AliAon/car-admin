import NumberInput from "@/components/number-input";
import { AccordionContent } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const TechnicalData = ({ handleChange, formData, setFormData }) => {
  return (
    <div>
      <AccordionContent className="grid grid-cols-2 px-[2px] gap-10">
        <div className="space-y-3">
          <div>
            <Label className="text-white mt-4">Height (mm)</Label>
            <Input
              onChange={handleChange}
              value={formData?.technicalData?.height}
              name="technicalData.height"
              className="bg-[#1D1D1D] border-[#242424] text-[#4F6374]"
              placeholder="height"
            />
          </div>{" "}
          <div className="grid grid-cols-2 gap-1">
            <div>
              <Label className="text-white mt-4">Width (mm)</Label>
              <NumberInput
                setFormData={setFormData}
                formData={formData}
                name="technicalData.width"
                bgColor="bg-[#1D1D1D]"
              />
            </div>
            <div>
              <Label className="text-white mt-4">Lenght (mm)</Label>
              <NumberInput
                setFormData={setFormData}
                formData={formData}
                name="technicalData.length"
                bgColor="bg-[#1D1D1D]"
              />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            <Label className="text-white mt-4">Type approval</Label>
            <Input
              onChange={handleChange}
              value={formData?.technicalData?.typeApproval}
              name="technicalData.typeApproval"
              className="bg-[#1D1D1D] border-[#242424] text-[#4F6374]"
              placeholder="Automatic"
            />
          </div>
          <div>
            <Label className="text-white mt-4">
              Vehicle idetification number
            </Label>
            <Input
              onChange={handleChange}
              value={formData?.technicalData?.vehicleIdetificationNumber}
              name="technicalData.vehicleIdetificationNumber"
              className="bg-[#1D1D1D] border-[#242424] text-[#4F6374]"
              placeholder="Automatic"
            />
          </div>
          <div>
            <Label className="text-white mt-4">Serial number</Label>
            <Input
              onChange={handleChange}
              value={formData?.technicalData?.serialNumber}
              name="technicalData.serialNumber"
              className="bg-[#1D1D1D] border-[#242424] text-[#4F6374]"
              placeholder="Automatic"
            />
          </div>
        </div>
      </AccordionContent>
    </div>
  );
};

export default TechnicalData;
