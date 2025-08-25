import { styled } from "@mui/material/styles";
import clsx from "clsx";
import { Check } from "lucide-react";

const CustomStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    ownerState.active || ownerState.completed ? "#998256" : "#fff",
  zIndex: 1,
  color: ownerState.active || ownerState.completed ? "#fff" : "#000",
  width: 32,
  height: 32,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  border: `2px solid #fff`,
}));

function CustomStepIcon(props) {
  const { active, completed, className, step } = props;

  return (
    <CustomStepIconRoot
      ownerState={{ completed, active }}
      className={clsx(className)}
    >
      {completed ? <Check fontSize="small" /> : <div>{step + 1}</div>}
    </CustomStepIconRoot>
  );
}

export default CustomStepIcon;