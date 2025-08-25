import { AccordionContent } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

const Price = ({ handleChange, formData, setFormData }) => {
  return (
    <AccordionContent className="grid grid-cols-2 gap-10">
      <div className="space-y-3">
        <div>
          <Label className="text-white mt-4">Price - CHF *</Label>
          <Input
            onChange={handleChange}
            value={formData?.price?.priceCHF}
            name="price.priceCHF"
            className="bg-[#1D1D1D] border-[#242424] text-[#4F6374]"
            placeholder="40000"
            disabled={formData?.price?.priceOnRequest}
          />
        </div>
        <div className="flex gap-2 items-center">
          <Checkbox
            className="border border-[#998256]"
            name="price.priceOnRequest"
            onCheckedChange={(value) => {
              setFormData("price.priceOnRequest", value);
              setFormData("price.newPrice", "");
              setFormData("price.priceCHF", "");
            }}
            checked={formData?.price?.priceOnRequest}
          />
          <p>Price on Request</p>
        </div>
      </div>
      <div>
        <Label className="text-white mt-4">New price - CHF</Label>
        <Input
          onChange={handleChange}
          value={formData?.price?.newPrice}
          name="price.newPrice"
          className="bg-[#1D1D1D] border-[#242424] text-[#4F6374]"
          placeholder="64000"
          disabled={formData?.price?.priceOnRequest}
        />
      </div>
    </AccordionContent>
  );
};

export default Price;
