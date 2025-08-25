import { AccordionContent } from "@/components/ui/accordion";
import { dateFormated } from "@/utils/helper";
import React from "react";

const VehicleInformation = ({ formData }) => {
  return (
    <>
      <AccordionContent className="text-white bg-[#242424] flex flex-col gap-4">
        <div>
          <div className="grid grid-cols-1 gap-10">
            <div className="border border-white rounded-lg p-4">
              <h2 className="text-white text-base mb-2">Specification</h2>
              <div>
                <table className="text-white">
                  <tbody>
                    <tr className="leading-8">
                      <td className="w-[200px]">Brand</td>
                      <td>{formData.brand}</td>
                    </tr>
                    <tr className="leading-8">
                      <td>Model</td>
                      <td>{formData.model}</td>
                    </tr>
                    <tr className="leading-8">
                      <td>Body Type</td>
                      <td>{formData.bodyType}</td>
                    </tr>
                    <tr className="leading-8">
                      <td>Fuel Type</td>
                      <td>{formData.fuelType}</td>
                    </tr>
                    <tr className="leading-8">
                      <td>Transmission</td>
                      <td>{formData.transmission}</td>
                    </tr>
                    <tr className="leading-8">
                      <td>Drive Type</td>
                      <td>{formData.driveType}</td>
                    </tr>
                    <tr className="leading-8">
                      <td>Number of Gears</td>
                      <td>{formData.numberofGears}</td>
                    </tr>
                    <tr className="leading-8">
                      <td>Cylinders</td>
                      <td>{formData.cylinders}</td>
                    </tr>
                    <tr className="leading-8">
                      <td>Doors</td>
                      <td>{formData.doors}</td>
                    </tr>
                    <tr className="leading-8">
                      <td>Seats</td>
                      <td>{formData.seats}</td>
                    </tr>
                    <tr className="leading-8">
                      <td>Engine Power</td>
                      <td>{formData.enginePower}</td>
                    </tr>
                    <tr className="leading-8">
                      <td>Cubic Capacity</td>
                      <td>{formData.cubicCapacity}</td>
                    </tr>
                    <tr className="leading-8">
                      <td>Date of First Registration</td>
                      <td>{formData.dateFirstRegistration}</td>
                    </tr>
                    <tr className="leading-8">
                      <td>License Category</td>
                      <td>{formData.licenseCategory}</td>
                    </tr>
                    <tr className="leading-8">
                      <td>Engine Type</td>
                      <td>{formData.engineType}</td>
                    </tr>
                    <tr className="leading-8">
                      <td>Total Weight</td>
                      <td>{formData.totalWeight}</td>
                    </tr>
                    <tr className="leading-8">
                      <td>Towing Capacity</td>
                      <td>{formData.towingCapacity}</td>
                    </tr>
                    <tr className="leading-8">
                      <td>Empty Weight</td>
                      <td>{formData.emptyWeight}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </AccordionContent>
    </>
  );
};

export default VehicleInformation;
