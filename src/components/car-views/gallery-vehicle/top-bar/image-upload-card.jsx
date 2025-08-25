import Loader3 from "@/common/loader";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUploadImageMutation } from "@/lib/services/image-api/image-api";
import { Loader } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Card } from "../../../../components/ui/card";
import { validateImageDimensions } from "@/utils/helper";

const VideoUploadCard = ({ setIsOpen }) => {
  const [dragging, setDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [UploadImage, { isLoading }] = useUploadImageMutation();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [accessType, setAccessType] = useState("public");

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => setDragging(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const droppedFiles = Array.from(e?.dataTransfer?.files || []);

    const imageFiles = droppedFiles.filter((file) =>
      file.type.startsWith("image/")
    );

    setUploadedFiles((prev) => [...prev, ...imageFiles]);
  };

  const handleInputChange = async (e) => {
    const selectedFiles = Array.from(e.target.files || []);

    await Promise.all(
      selectedFiles.map((file) => {
        return validateImageDimensions(file);
      })
    );

    const imageFiles = selectedFiles.filter((file) =>
      file.type.startsWith("image/")
    );

    setUploadedFiles((prev) => [...prev, ...imageFiles]);
  };

  const handleFileUpload = async () => {
    if (!uploadedFiles.length) return;

    for (const file of uploadedFiles) {
      const formdata = new FormData();
      formdata.append("images", file);
      formdata.append("name", name);
      formdata.append("price", price);
      formdata.append("isPrivate", accessType === "private" ? true : false);

      try {
        const response = await UploadImage(formdata)
          .unwrap()
          .then((res) => {
            setIsOpen(false);
            toast.success(res.message);
          })
          .catch((err) => toast.error(err?.data?.message));
      } catch (err) {
        console.error("Upload failed", err);
      }
    }

    // Optionally clear uploadedFiles after upload
    setUploadedFiles([]);
  };

  return (
    <div>
      <Card
        className={`p-4 h-56 bg-transparent flex items-center border-dashed rounded-lg ${
          dragging ? "border-[#2173E3]" : "border-[#998256]"
        } border-2`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="w-[400px] mx-auto text-center">
          {isLoading ? (
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
                multiple
                className="hidden"
                accept="image/*"
                onChange={handleInputChange}
              />
              <span className="text-[#475467] dark:text-white ml-1">
                or drag and drop
              </span>
              <p className="text-xs text-[#475467] dark:text-white mt-1">
                Add up to 6 images (max. 10 MB / image)
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

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="flex flex-col text-white">
          <input
            type="text"
            className="w-[300px] rounded-md bg-[#242424] py-2 px-3"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <Select value={accessType} onValueChange={setAccessType}>
          <SelectTrigger className="w-[300px] bg-[#242424] border-[#242424] text-white">
            <SelectValue placeholder="Access Type" />
          </SelectTrigger>
          <SelectContent className="bg-[#242424] text-white">
            {["public", "private"].map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-end mt-4">
        <Button onClick={handleFileUpload} className="text-white">
          {isLoading ? <Loader3 /> : "Submit"}
        </Button>
      </div>
    </div>
  );
};

export default VideoUploadCard;
