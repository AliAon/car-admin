import { AccordionContent } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useRef } from "react";
import { vehicleTypeOptions } from "../form-static-data";
import { warrantyOptions } from "@/data";

const Conditions = ({ handleChange, formData, setFormData }) => {
  const dateInputRef = useRef(null);

  const openDatePicker = () => {
    console.log("Opening date picker");
    if (dateInputRef.current) {
      dateInputRef.current.showPicker?.() || dateInputRef.current.focus();
    }
  };

  return (
    <div>
      <AccordionContent className="grid grid-cols-2 px-[2px] gap-10">
        <div className="space-y-3">
          <div>
            <Label className="text-white mt-4">Vehicle condition *</Label>
            <Select
              onValueChange={(value) =>
                setFormData("Condition.vehicleCondition", value)
              }
              value={formData?.Condition?.vehicleCondition}
            >
              <SelectTrigger className="bg-[#1D1D1D] border-[#242424] text-[#4F6374] w-full">
                <SelectValue placeholder="Select vehicle condition" />
              </SelectTrigger>
              <SelectContent className="bg-[#1D1D1D] border-[#242424] text-[#4F6374]">
                <SelectGroup>
                  {vehicleTypeOptions.map((door) => (
                    <div className="" key={door}>
                      <SelectItem value={door}>{door}</SelectItem>
                    </div>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-white mt-4">Mileage *</Label>
            <Input
              onChange={handleChange}
              value={formData?.Condition?.mileage}
              name="Condition.mileage"
              className="bg-[#1D1D1D] border-[#242424] text-[#4F6374]"
              placeholder="mileage"
            />
          </div>
        </div>
        <div className="space-y-3">
          <div>
            <Label className="text-white mt-4">Last inspection at MFK *</Label>
            <div className="relative inline-block w-full">
              <input
                type="date"
                ref={dateInputRef}
                onChange={() =>
                  setFormData(
                    "Condition.lastInspectionAtMFK",
                    event.target.value
                  )
                }
                name="lastInspectionAtMFK"
                placeholder="__.____"
                className="bg-[#1D1D1D] w-full border-[#242424] text-[#4F6374] p-2 rounded-lg pl-10"
                value={
                  formData?.Condition?.lastInspectionAtMFK
                    ? formData.Condition.lastInspectionAtMFK.slice(0, 10)
                    : ""
                }
              />
              <img
                src="/assets/svg/date-icon.svg"
                className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer z-50"
                onClick={openDatePicker}
              />
            </div>
            <div className="flex items-center gap-2 mt-3">
              <Checkbox
                id="remember_me"
                className="border border-[#998256]"
                name="abMFK"
                onCheckedChange={() =>
                  setFormData("Condition.abMFK", !formData?.Condition?.abMFK)
                }
                checked={formData?.Condition?.abMFK}
              />
              <p className="text-white font-sans">Last inspection at MFK *</p>
            </div>
          </div>

          <div>
            <Label className="text-white mt-4">Warranty</Label>

            <Select
              onValueChange={(value) =>
                setFormData("Condition.warranty", value)
              }
              name="warranty"
              className="bg-[#242424]"
              value={formData?.Condition?.warranty}
            >
              <SelectTrigger className="w-full bg-[#1D1D1D] border-[#242424] text-[#4F6374]">
                <SelectValue placeholder="Select a Option" />
              </SelectTrigger>
              <SelectContent className="bg-[#242424] text-[#4F6374]">
                {warrantyOptions.map((cat) => (
                  <SelectItem value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </AccordionContent>
    </div>
  );
};

export default Conditions;
