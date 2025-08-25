import QuillEditor from "@/components/quill-editor";
import { AccordionContent } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

const DetailData = ({ formData, handleChange, setFormData }) => {
  return (
    <>
      <AccordionContent className="text-white bg-[#242424] space-y-6">
        <div className="space-y-3">
          <h1>Characteristics</h1>
          <div className="flex gap-2 items-center">
            <Checkbox
              className="border border-[#998256]"
              name="detaildata.directParallelImport"
              onCheckedChange={(value) =>
                setFormData("detaildata.directParallelImport", value)
              }
              checked={!!formData?.detaildata.directParallelImport}
            />
            <p>Direct/parallel import</p>
          </div>
        </div>
        <div className="space-y-3">
          <h1>Extras</h1>
          <div className="flex gap-2 items-center">
            <Checkbox
              className="border border-[#998256]"
              name="detaildata.tyres"
              onCheckedChange={(value) =>
                setFormData("detaildata.tyres", value)
              }
              checked={formData?.detaildata?.tyres}
            />
            <p>8 tyres</p>
          </div>
        </div>
        <div className="space-y-3 px-[2px]">
          <h1>Special Futures * </h1>
          <QuillEditor
            value={formData?.detaildata?.specialFutures}
            onChange={(value) =>
              setFormData("detaildata.specialFutures", value)
            }
          />
        </div>
      </AccordionContent>
    </>
  );
};

export default DetailData;
