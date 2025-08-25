import Step1Form from "./step1Form";
import {ScrollArea} from  "@/components/ui/scroll-area";
import Step2Form from "./step2Form";
import Step3Form from "./step3Form";
import Step4Form from "./step4Form";


const RenderStepContent = (step, handleBack, handleCreateVehicle, formik, setIsOpen) => {
  switch (step) {
    case 0:
      return (
        <ScrollArea className="h-[calc(100vh-200px)] w-full ">
          <Step1Form
            setFormData={formik.setFieldValue}
            handleChange={formik.handleChange}
            formData={formik.values}
          />
        </ScrollArea>
      );
    case 1:
      return (
        <ScrollArea className="h-[calc(100vh-200px)] w-full ">
          <Step2Form
            handleBack={handleBack}
            formData={formik.values}
            setFormData={formik.setFieldValue}
            handleChange={formik.handleChange}
          />
        </ScrollArea>
      );
    case 2:
      return (
        <ScrollArea className="h-[calc(100vh-200px)] w-full ">
          <Step3Form />
        </ScrollArea>
      );
    case 3:
      return (
        <ScrollArea className="h-[calc(100vh-200px)] w-full ">
          <Step4Form
            formData={formik.values}
            setIsOpen={setIsOpen}
            handleCreateVehicle={handleCreateVehicle}
          />
        </ScrollArea>
      );
    default:
      return null;
  }
};

export default RenderStepContent;
