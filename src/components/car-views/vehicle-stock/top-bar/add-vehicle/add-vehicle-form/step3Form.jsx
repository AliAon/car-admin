import React, { useState } from "react";
import FileUploadCard from "../../../../../fileuploadcard";

export default function Step3Form() {
  const [filesarray, setFilesArray] = useState([]);

  return (
    <>
      <h2 className="text-white text-xl mb-4">Add Picture</h2>
      <div className="bg-[#242424] flex flex-col gap-4 rounded-lg p-4 ">
        <div className="border border-white rounded-lg p-4">
          <h2 className="text-white text-lg">Best Photography Tips</h2>
          <div className="grid grid-cols-4 gap-2 my-4">
            <div className="flex flex-col gap-2">
              <img src="/assets/svg/sun_light.svg" alt="" className="mx-auto" />
              <p className="text-white text-sm text-center"> Natural light</p>
            </div>
            <div className="flex flex-col gap-2">
              <img src="/assets/svg/camera.svg" alt="" className="mx-auto" />
              <p className="text-white text-sm text-center"> 360-degree view</p>
            </div>
            <div className="flex flex-col gap-2">
              <img src="/assets/svg/interior.svg" alt="" className="mx-auto" />
              <p className="text-white text-sm text-center">
                Interior and exterior
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <img src="/assets/svg/equipment.svg" alt="" className="mx-auto" />
              <p className="text-white text-sm text-center">
                {" "}
                Complete equipment
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#99825626] rounded-lg p-4 border-l-4 border-[#998256] ">
          <span className="flex items-start  gap-4">
            <img src="/assets/svg/camera.svg" className="w-6" alt="" />
            <span>
              <p className="text-base text-white">
                Need to upload more than 6 photos
              </p>
              <span className="text-xs text-white">
                Upgrade to a suitable package in the next step. <br /> banner
                image diamension: 828 x 536 px <br /> feature image dimension:
                700 x 722 px
              </span>
            </span>
          </span>
        </div>
        <FileUploadCard onSetFilesArray={setFilesArray} />
      </div>
    </>
  );
}
