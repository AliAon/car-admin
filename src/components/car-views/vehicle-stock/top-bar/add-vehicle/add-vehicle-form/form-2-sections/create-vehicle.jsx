import { AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import React from "react";

const CreateVehicle = ({ formData, handleBack }) => {
  return (
    <div>
      <AccordionContent className="text-white bg-[##1D1D1D] flex flex-col gap-4">
        <p>
          We've already recorded the following information. Not your vehicle?
          <span className="text-primary cursor-pointer" onClick={handleBack}>
            {" "}
            Change vehicle data
          </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <div className="border border-[#D0D0D0] rounded-lg p-4 bg-[#1D1D1D]">
            <h2 className="text-white text-base mb-4">Specifications</h2>
            <div className="grid grid-cols-1 gap-x-10 gap-y-2">
              <Row label="Brand" value={formData.brand} />
              <Row label="Model" value={formData.model} />
              <Row label="Body Type" value={formData.bodyType} />
              <Row label="Fuel Type" value={formData.fuelType} />
              <Row label="Transmission" value={formData.transmission} />
              <Row label="Drive Type" value={formData.driveType} />
              <Row label="Number of Gears" value={formData.numberofGears} />
              <Row label="Cylinders" value={formData.cylinders} />
              <Row label="Doors" value={formData.doors} />
              <Row label="Seats" value={formData.seats} />
              <Row label="Engine Power (PS)" value={formData.enginePower} />
              <Row label="Cubic Capacity (cc)" value={formData.cubicCapacity} />
              <Row
                label="Date First Registration"
                value={formData.dateFirstRegistration}
              />
              <Row label="Engine Type" value={formData.engineType} />
              <Row label="Total Weight (kg)" value={formData.totalWeight} />
              <Row
                label="Towing Capacity (kg)"
                value={formData.towingCapacity}
              />
              <Row label="Empty Weight (kg)" value={formData.emptyWeight} />
            </div>
          </div>
          <div className="border border-[#D0D0D0] rounded-lg p-4 bg-[#1D1D1D]">
            <Row label="License Category" value={formData.licenseCategory} />
          </div>
        </div>
      </AccordionContent>
    </div>
  );
};

const Row = ({ label, value }) => (
  <div className="flex">
    <span className="w-[180px] font-medium text-sm">{label}</span>
    <span className="text-sm">{value || "-"}</span>
  </div>
);

export default CreateVehicle;
