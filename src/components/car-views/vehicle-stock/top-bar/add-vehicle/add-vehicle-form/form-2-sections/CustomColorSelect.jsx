import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CustomColorSelect = ({ formData, setFormData, colorOptions = [], isManual, setIsManual }) => {
  const [manualColor, setManualColor] = useState("");

  const handleSelect = (value) => {
    if (value === "manual") {
      setIsManual(true);
      setFormData("vehicleFeature.colour", "");
    } else {
      setIsManual(false);
      setManualColor("");
      setFormData("vehicleFeature.colour", value);
    }
  };

  const handleManualInput = (e) => {
    const value = e.target.value;
    setManualColor(value);
    setFormData("vehicleFeature.colour", value);
  };

  return (
    <div className="mt-5">
      <Label className="text-white block mb-2">Colour *</Label>

      {!isManual ? (
        <Select
          onValueChange={handleSelect}
          value={formData?.vehicleFeature?.colour || ""}
        >
          <SelectTrigger className="bg-[#1D1D1D] border-[#242424] text-[#4F6374] w-full">
            <SelectValue placeholder="Select a color" />
          </SelectTrigger>
          <SelectContent className="bg-[#1D1D1D] border-[#242424] text-[#4F6374]">
            {colorOptions.map((color) => (
              <SelectItem key={color} value={color}>
                {color}
              </SelectItem>
            ))}
            <SelectItem value="manual">Manual</SelectItem>
          </SelectContent>
        </Select>
      ) : (
        <Input
          type="text"
          value={formData?.vehicleFeature?.colour || manualColor}
          onChange={handleManualInput}
          placeholder="Enter manual colour"
          className="bg-[#1D1D1D] border-[#242424] text-[#4F6374] w-full"
        />
      )}
    </div>
  );
};

export default CustomColorSelect;
