import React, { createContext, useState } from "react";

export const VehicleContext = createContext();

export const VehicleProvider = ({ children }) => {
  const [file, setFile] = useState(null);
  const [featureImage, setFeatureImage] = useState(null);

  return (
    <VehicleContext.Provider
      value={{ file, setFile, featureImage, setFeatureImage }}
    >
      {children}
    </VehicleContext.Provider>
  );
};

export const useVehicle = () => {
  const context = React.useContext(VehicleContext);
  if (context === undefined) {
    throw new Error("useVehicle must be used within a VehicleProvider");
  }
  return context;
};
