import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

const Detaildata = ({ formData }) => {
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
            Detaildata
          </AccordionTrigger>
          <AccordionContent className="text-white bg-[#242424] flex flex-col gap-4">
            <div>
              <div className="grid grid-cols-1 gap-10">
                <div className="border border-white rounded-lg p-4">
                  <div>
                    <table className="text-white">
                      <tbody>
                        <tr className="leading-8">
                          <td className="w-[200px]">Characteristics</td>
                          <Checkbox
                            checked={formData?.detaildata?.directParallelImport}
                          />
                        </tr>
                        <tr className="leading-8">
                          <td className="w-[200px]">Extras</td>
                          <Checkbox checked={formData?.detaildata?.tyres} />
                        </tr>{" "}
                        <tr className="leading-8">
                          <td className="w-[200px]">Special Futures * </td>
                          <td
                            className="prose text-white"
                            dangerouslySetInnerHTML={{
                              __html: formData?.detaildata?.specialFutures,
                            }}
                          ></td>
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

export default Detaildata;
