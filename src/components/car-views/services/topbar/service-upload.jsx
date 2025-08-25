import Loader2 from "@/common/loader";
import { Button } from "@/components/ui/button";
import {
  useAddServiceMutation,
  useUpdateServiceMutation,
} from "@/lib/services/service-api/service-api";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Card } from "../../../../components/ui/card";
import { validateImageDimensions } from "@/utils/helper";
import QuillEditor from "@/components/quill-editor";
import { useUploadImageMutation } from "@/lib/services/image-api/image-api";

const ServiceUploadCard = ({ setIsOpen, formData, isEdit }) => {
  const [dragging, setDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [addService, { isLoading }] = useAddServiceMutation();
  const [updateService, { isLoading: isUpdating }] = useUpdateServiceMutation();
  const [uploadImage, { isLoading: isUploading }] = useUploadImageMutation();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => setDragging(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const droppedFiles = Array.from(e?.dataTransfer?.files || []);

    const videoFiles = droppedFiles.filter((file) =>
      file.type.startsWith("video/")
    );

    setUploadedFiles((prev) => [...prev, ...videoFiles]);
  };

  const handleInputChange = async (e) => {
    const selectedFiles = Array.from(e.target.files || []);

    const images = selectedFiles.filter((file) =>
      file.type.startsWith("image/")
    );

    await Promise.all(
      images.map((file) => {
        return validateImageDimensions(file);
      })
    );

    const formData = new FormData();
    images.forEach((file) => {
      formData.append("images", file);
    });

    uploadImage(formData)
      .unwrap()
      .then((res) => {
        setUploadedFiles((prev) => [...prev, ...res?.data?.images]);
        toast.success("Image uploaded successfully");
      })
      .catch((err) => {
        toast.error(err?.data?.message || "Image upload failed");
      });
  };

  const handleFileUpload = async () => {
    if (!uploadedFiles.length) return;

    const data = {
      title: name,
      content: description,
      image: [uploadedFiles?.[0]?.url],
    };

    try {
      await addService(data)
        .unwrap()
        .then((res) => {
          toast.success(res.message);
          setIsOpen(false);
        })
        .catch((err) => toast.error(err?.data?.message));
    } catch (err) {
      console.error("Upload failed", err);
    }

    setUploadedFiles([]);
  };

  const handleEditService = async () => {
    if (!formData?._id) return;

    const data = {
      title: name,
      content: description,
      image: uploadedFiles.length ? uploadedFiles?.[0]?.url : formData?.images,
    };

    try {
      await updateService({ data: data, id: formData?._id })
        .unwrap()
        .then((res) => {
          toast.success(res.message);
          setIsOpen(false);
        })
        .catch((err) => toast.error(err?.data?.message));
    } catch (err) {
      console.error("Upload failed", err);
    }

    setUploadedFiles([]);
  };

  useEffect(() => {
    if (formData) {
      setName(formData?.title);
      setDescription(formData?.content);
    }
  }, [formData]);

  return (
    <div>
      <Card
        className={`p-4 h-56 bg-transparent flex items-center border-dashed rounded-lg pt-10 ${
          dragging ? "border-[#2173E3]" : "border-[#998256]"
        } border-2`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="w-[400px] mx-auto text-center">
          {isUploading ? (
            <Loader className="mx-auto text-white" />
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
              <label
                htmlFor="file-upload"
                className="cursor-pointer font-bold text-primary dark:text-white"
              >
                Click to upload
              </label>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleInputChange}
              />
              <span className="text-[#475467] dark:text-white ml-1">
                or drag and drop
              </span>
              <p className="text-xs text-[#475467] dark:text-white mt-1">
                Add up to 6 videos (max. 10 MB / video)
              </p>
              {uploadedFiles.length > 0 && (
                <ul className="mt-2 text-sm text-green-500">
                  {uploadedFiles.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </Card>

      <div className="mt-4 grid grid-cols-1 gap-4">
        <div className="flex flex-col text-white">
          <label>Name</label>
          <input
            type="text"
            className="w-[300px] rounded-md bg-[#242424] py-2 px-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col text-white w-full ">
          <div className="flex  justify-between mb-2">
            <label>Description</label>
            <p className="text-xs text-[#A9ACB4]">
              {" "}
              (only 1000 characters allowed)
            </p>
          </div>
          <QuillEditor
            onChange={(text) => {
              if (description.length > 1000) return;
              setDescription(text);
            }}
            value={description}
          />
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <Button
          onClick={() => {
            isEdit ? handleEditService() : handleFileUpload();
          }}
          className="text-white"
        >
          {isLoading || isUpdating ? <Loader2 /> : "Submit"}
        </Button>
      </div>
    </div>
  );
};

export default ServiceUploadCard;
