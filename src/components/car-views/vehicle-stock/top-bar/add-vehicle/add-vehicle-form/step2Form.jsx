import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "../../../../../ui/accordion";
import Conditions from "./form-2-sections/conditions";
import CreateVehicle from "./form-2-sections/create-vehicle";
import DetailData from "./form-2-sections/detail-data";
import ExtraFeatures from "./form-2-sections/extra-features";
import Price from "./form-2-sections/price";
import VehicleFeatures from "./form-2-sections/vehicle-features";
import TechnicalData from "./technical-data";

export default function Step2Form({
  formData,
  handleBack,
  setFormData,
  handleChange,
}) {
  return (
    <div>
      {/* create vehicle  */}
      <h2 className="text-white text-xl">Create vehicle</h2>
      <Accordion type="single" className="flex flex-col gap-4" collapsible>
        <AccordionItem
          value="item-1"
          className="bg-[#242424] ga rounded-lg px-4 border-[#242424] text-[#4F6374]"
        >
          <AccordionTrigger className="text-white">
            Vehicle Information
          </AccordionTrigger>
          <CreateVehicle formData={formData} handleBack={handleBack} />
        </AccordionItem>
        {/* Vehicle Features  */}
        <AccordionItem
          value="item-2"
          className="bg-[#242424] rounded-lg px-4 border-[#242424] text-[#4F6374]"
        >
          <AccordionTrigger className="text-white">
            Vehicle Features
          </AccordionTrigger>
          <VehicleFeatures setFormData={setFormData} formData={formData} />
        </AccordionItem>
        {/* Conditions  */}
        <AccordionItem
          value="item-3"
          className="bg-[#242424] rounded-lg px-4 border-[#242424] text-[#4F6374]"
        >
          <AccordionTrigger className="text-white">Conditions</AccordionTrigger>
          <Conditions
            formData={formData}
            handleChange={handleChange}
            setFormData={setFormData}
          />
        </AccordionItem>
        {/* Price */}
        <AccordionItem
          value="item-7"
          className="bg-[#242424] rounded-lg px-4 border-[#242424] text-[#4F6374]"
        >
          <AccordionTrigger className="text-white">Price</AccordionTrigger>
          <Price
            handleChange={handleChange}
            formData={formData}
            setFormData={setFormData}
          />
        </AccordionItem>
        {/* Technical Data */}
        <AccordionItem
          value="item-4"
          className="bg-[#242424] rounded-lg px-4 border-[#242424] text-[#4F6374]"
        >
          <AccordionTrigger className="text-white">
            Technical Data
          </AccordionTrigger>
          <TechnicalData
            handleChange={handleChange}
            formData={formData}
            setFormData={setFormData}
          />
        </AccordionItem>
        {/* Detaildata  */}
        <AccordionItem
          value="item-6"
          className="bg-[#242424] rounded-lg px-4 border-[#242424] text-[#4F6374]"
        >
          <AccordionTrigger className="text-white">Detaildata</AccordionTrigger>
          <DetailData
            handleChange={handleChange}
            formData={formData}
            setFormData={setFormData}
          />
        </AccordionItem>
        {/* Extra features */}
        <AccordionItem
          value="item-5"
          className="bg-[#242424] rounded-lg px-4 border-[#242424] text-[#4F6374]"
        >
          <AccordionTrigger className="text-white">
            Extra features
          </AccordionTrigger>
          <ExtraFeatures handleChange={handleChange} formData={formData} />
        </AccordionItem>
      </Accordion>
    </div>
  );
}
