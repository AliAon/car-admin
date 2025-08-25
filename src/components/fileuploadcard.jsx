import React, { useState } from "react";
import { Card } from "./ui/card";
import { useUploadImageMutation } from "@/lib/services/image-api/image-api";
import { Loader } from "lucide-react";
import { useVehicle } from "@/context/VehicleContext";
import { validateImageDimensions } from "@/utils/helper";
import toast from "react-hot-toast";

const FileUploadCard = ({ onUploadFile = () => {} }) => {
  const [dragging, setDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [UploadImage] = useUploadImageMutation();
  const { setFile, setFeatureImage, featureImage } = useVehicle();
  const [isMainLoading, setIsMainLoading] = useState(false);
  const [isFeatureLoading, setIsFeatureLoading] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    setDragging(false);
    const droppedFile = e?.dataTransfer?.files?.[0];
    if (!droppedFile) return;

    try {
      await validateImageDimensions(droppedFile);
      setIsMainLoading(true);

      const formdata = new FormData();
      formdata.append("file", droppedFile);

      const response = await UploadImage(formdata).unwrap();
      if (response) {
        setUploadedFile(droppedFile);
        setFile([response.file_url]);
        onUploadFile((prevState) => [...prevState, response.file_url]);
      }
    } catch (err) {
      console.error("Drop upload failed", err);
    } finally {
      setIsMainLoading(false);
    }
  };

  const handleFileChange = async (e) => {
    const selectedFiles = e?.target?.files;
    await validateImageDimensions(selectedFiles[0]);
    setIsMainLoading(true);

    if (selectedFiles && selectedFiles.length > 0) {
      const formdata = new FormData();

      Array.from(selectedFiles).forEach((file, index) => {
        formdata.append("images", file);
      });

      await UploadImage(formdata)
        .unwrap()
        .then((res) => {
          setFile(res.data.images);
          setUploadedFile(res.data.images[0]);
          setIsMainLoading(false);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsMainLoading(false);
        });
    }
  };

  const handleFeatureImageChange = async (e) => {
    const selectedFiles = Array.from(e?.target?.files || []).slice(0, 3);
    if (selectedFiles.length === 0) return;

    setIsFeatureLoading(true);

    try {
      await Promise.all(
        selectedFiles.map((file) => validateImageDimensions(file, true))
      );

      const formdata = new FormData();
      selectedFiles.forEach((file) => {
        formdata.append("images", file);
      });

      const res = await UploadImage(formdata).unwrap();

      setFeatureImage(res.data.images.map((img) => img.url));
      toast.success("Images uploaded successfully");
    } catch (err) {
      toast.error("Image upload failed");
    } finally {
      setIsFeatureLoading(false);
    }
  };

  return (
    <div>
      <Card
        className={`p-4 h-56 bg-transparent flex items-center  border-[#998256] rounded-lg border-dashed ${
          dragging ? "border-[#2173E3] dark:border-white" : "border-[#998256] "
        } border-2`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="w-[400px] mx-auto">
          {isMainLoading ? (
            <div className="flex justify-center">
              <Loader className="text-white" />
            </div>
          ) : (
            <>
              <div className="mb-2">
                <img
                  src="/assets/svg/upload.svg"
                  width={40}
                  height={40}
                  className="mx-auto"
                  alt="Upload Icon"
                />
              </div>
              <div className="flex justify-center">
                <label htmlFor="file-upload" className="cursor-pointer">
                  <span className="text-primary dark:text-white font-bold pr-2">
                    Click to upload
                  </span>
                </label>
                <input
                  id="file-upload"
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleFileChange}
                />
                <span className="text-[#475467] dark:text-white">
                  {" "}
                  or drag and drop
                </span>
              </div>
              <p className="text-center text-xs text-[#475467] dark:text-white">
                FilAdd up to 6 photos (max. 10 MB / photo)
              </p>
              {uploadedFile && (
                <p className="mt-4 text-center text-sm text-green-500">
                  Uploaded: {uploadedFile.name}
                </p>
              )}
            </>
          )}
        </div>
      </Card>
      <div>
        <h1 className="text-white my-4 font-semibold text-base">
          Upload Feature Image
        </h1>
        <Card
          className={`p-4 h-56 bg-transparent flex items-center  border-[#998256] rounded-lg border-dashed ${
            dragging
              ? "border-[#2173E3] dark:border-white"
              : "border-[#998256] "
          } border-2`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="w-[400px] mx-auto">
            {isFeatureLoading ? (
              <div className="flex justify-center">
                <Loader className="text-white" />
              </div>
            ) : (
              <>
                <div className="mb-2">
                  <img
                    src="/assets/svg/upload.svg"
                    width={40}
                    height={40}
                    className="mx-auto"
                    alt="Upload Icon"
                  />
                </div>
                <div className="flex justify-center">
                  <label htmlFor="file-upload2" className="cursor-pointer">
                    <span className="text-primary dark:text-white font-bold pr-2">
                      Click to upload
                    </span>
                  </label>
                  <input
                    id="file-upload2"
                    type="file"
                    multiple
                    className="hidden"
                    onChange={handleFeatureImageChange}
                  />
                  <span className="text-[#475467] dark:text-white">
                    {" "}
                    or drag and drop
                  </span>
                </div>

                {featureImage && (
                  <p className="mt-4 text-center text-sm text-green-500">
                    Uploaded
                  </p>
                )}
              </>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FileUploadCard;
