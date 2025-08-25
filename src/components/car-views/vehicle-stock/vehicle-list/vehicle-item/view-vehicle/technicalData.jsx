import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const TechnicalData = ({ formData }) => {
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
            Technical Data
          </AccordionTrigger>
          <AccordionContent className="text-white bg-[#242424] flex flex-col gap-4">
            <div>
              <div className="grid grid-cols-1 gap-10">
                <div className="border border-white rounded-lg p-4">
                  <div>
                    <table className="text-white">
                      <tbody>
                        <tr className="leading-8">
                          <td className="w-[200px]">Height (mm)</td>
                          <td>{formData?.technicalData?.height}</td>
                        </tr>{" "}
                        <tr className="leading-8">
                          <td className="w-[200px]">Width (mm)</td>
                          <td>{formData?.technicalData?.width}</td>
                        </tr>
                        <tr className="leading-8">
                          <td className="w-[200px]">Lenght (mm)</td>
                          <td>{formData?.technicalData?.length}</td>
                        </tr>{" "}
                        <tr className="leading-8">
                          <td className="w-[200px]">Type approval</td>
                          <td>{formData?.technicalData?.typeApproval}</td>
                        </tr>{" "}
                        <tr className="leading-8">
                          <td className="w-[200px]">
                            Vehicle idetification number
                          </td>
                          <td>
                            {
                              formData?.technicalData
                                ?.vehicleIdetificationNumber
                            }
                          </td>
                        </tr>
                        <tr className="leading-8">
                          <td className="w-[200px]">Serial number</td>
                          <td>{formData?.technicalData?.serialNumber}</td>
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

export default TechnicalData;
