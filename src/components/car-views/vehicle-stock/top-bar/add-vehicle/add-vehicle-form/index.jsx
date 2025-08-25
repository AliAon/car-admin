import Loader from "@/common/loader";
import { useVehicle } from "@/context/VehicleContext";
import {
  useCreateVehicleMutation,
  useUpdateVehicleMutation,
} from "@/lib/services/vehicle-api";
import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { initialVehicleValues } from "./intial-values";
import RenderStepContent from "./render-step-component";
import CustomStepIcon from "./custom-step-icon";

const steps = [
  "Create vehicle",
  "Vehicle details",
  "Add Picture",
  "Picure details",
];

function AddVehicleForm({ setIsOpen, isEdit = false, formData }) {
  const [activeStep, setActiveStep] = useState(0);
  const [isFinalFormShow, setIsFinalFormShow] = useState(false);
  const [createVehicle, { isLoading }] = useCreateVehicleMutation();
  const [updateVehicle, { isLoading: isUpdateLoading }] =
    useUpdateVehicleMutation();

  const { file, featureImage, setFile } = useVehicle();

  const formik = useFormik({
    initialValues: initialVehicleValues,
    onSubmit: (values, { resetForm }) => {
      createVehicle(values);
      resetForm();
    },
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleCreateVehicle = async () => {
    await createVehicle({
      ...formik.values,
      images: file?.map((item) => item.url),
      featuredImage: featureImage,
    })
      .unwrap()
      .then((res) => {
        setIsFinalFormShow(true);
        handleNext();
        toast.success(res?.message);
      })
      .catch((err) => {
        toast.error(err?.data?.message);
      });
  };

  useEffect(() => {
    if (isEdit && formData) {
      formik.setValues({
        ...initialVehicleValues,
        ...formData,
      });
      setFile(formData?.images);
    }
  }, [isEdit, formData]);

  const handleEditVehicle = async () => {
    if (!formData?._id) return;
    await updateVehicle({
      data: {
        ...formik.values,
        images: file?.map((item) => (item.url ? item.url : item)),
        featuredImage: featureImage,
      },
      id: formData?._id,
    })
      .unwrap()
      .then((res) => {
        setIsFinalFormShow(true);
        handleNext();
        toast.success(res?.message);
      })
      .catch((err) => {
        toast.error(err?.data?.message);
      });
  };

  return (
    <Box sx={{ width: "100%", margin: "0 auto", marginTop: 4 }}>
      <div className="flex justify-center items-center">
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel
                StepIconComponent={(props) => (
                  <CustomStepIcon {...props} step={index} />
                )}
              ></StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <Box sx={{ mt: 4 }}>
        {isFinalFormShow ? (
          <Box className="text-center">
            <Typography variant="h5" gutterBottom className="text-white">
              Thank you for submitting the form!
            </Typography>
            <Button
              onClick={() => setIsOpen(false)}
              variant="contained"
              className="cursor-pointer"
              style={{
                backgroundColor: "#998256",
                color: "white",
              }}
            >
              Close
            </Button>
          </Box>
        ) : (
          <Box>
            {RenderStepContent(
              activeStep,
              handleBack,
              handleCreateVehicle,
              formik,
              setIsOpen
            )}
            <Box sx={{ mt: 2, float: "right" }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1, backgroundColor: "#998256", color: "white" }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  if (activeStep === 3) {
                    isEdit ? handleEditVehicle() : handleCreateVehicle();
                  } else {
                    handleNext();
                  }
                }}
                className="cursor-pointer"
                style={{
                  backgroundColor: "#998256",
                  color: "white",
                }}
              >
                {isLoading || isUpdateLoading ? (
                  <div className="h-[25px]">
                    <Loader />
                  </div>
                ) : activeStep === steps.length - 1 ? (
                  "Done"
                ) : (
                  "Next"
                )}
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default AddVehicleForm;
