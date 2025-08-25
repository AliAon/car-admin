import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const Condition = ({ formData }) => {
  return (
    <>
      <Accordion
        type="single"
        className="flex flex-col gap-4 border-[#C1C1C1C1]"
        collapsible
      >
        <AccordionItem
          value="item-1"
          className="bg-[#242424]  rounded-lg px-4 border border-[#C1C1C1C1]  text-[#4F6374]"
        >
          <AccordionTrigger className="text-white  ">
            Condition
          </AccordionTrigger>
          <AccordionContent className="text-white bg-[#242424] flex flex-col gap-4">
            <div>
              <div className="grid grid-cols-1 gap-10">
                <div className="border border-white rounded-lg p-4">
                  <div>
                    <table className="text-white">
                      <tbody>
                        <tr className="leading-8">
                          <td className="w-[200px]">Vehicle condition *</td>
                          <td>{formData?.Condition?.vehicleCondition}</td>
                        </tr>
                        <tr className="leading-8">
                          <td className="w-[200px]">
                            Last inspection at MFK *
                          </td>
                          <td>{formData?.Condition?.lastInspectionAtMFK}</td>
                        </tr>{" "}
                        <tr className="leading-8">
                          <td className="w-[200px]">Mileage *</td>
                          <td>{formData?.Condition?.mileage}</td>
                        </tr>{" "}
                        <tr className="leading-8">
                          <td className="w-[200px]">Warranty</td>
                          <td>{formData?.Condition?.warranty}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Condition;
