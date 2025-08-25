import {
  useDeleteImageMutation,
  useUpdateImageStatusMutation,
} from "@/lib/services/image-api/image-api";
import { useState } from "react";
import GenericDeleteDialog from "../../../../generic-delete-dialog";
import { ImageView } from "./image-view";
import toast from "react-hot-toast";
import { Switch } from "@mui/material";

export default function GalleryItem({ item }) {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [open, setOpen] = useState(false);
  const deleteImage = useDeleteImageMutation();
  const [updateStatus, {isLoading}] = useUpdateImageStatusMutation();
  const totalSize = item?.images?.reduce(
    (total, image) => total + image.bytes,
    0
  );

  const handleUpdateImage = () => {
    updateStatus({ id: item?._id, data: { isActive: !item?.isActive } })
      .unwrap()
      .then((res) => {
        toast.success(res.message);
      })
      .catch((err) => {
        toast.error(err?.data?.message);
      });
  };

  return (
    <div className="bg-[#242424] rounded-lg grid grid-cols-12 gap-2">
      <div className="lg:col-span-4 col-span-12">
        <img
          src={item?.images?.[0]?.url}
          alt=""
          className="lg:rounded-l-lg rounded-l-lg lg:rounded-r-none rounded-r-lg  object-cover h-[200px] w-full"
        />
      </div>
      <div className="relative lg:col-span-8 col-span-12 p-4">
        <div className="flex  flex-col h-full justify-between gap-2">
          <h2 className="text-white font-medium leading-5 text-sm max-w-64 uppercase">
            {item?.name}
          </h2>
          <div className="space-y-2">
            <p className="text-xs text-[#696969]">
              {(totalSize / 1024).toFixed(2)} KB
            </p>
            <hr className="bg-primary border-t border-[#998256] " />
            <div className="flex items-center justify-end">
              <div className="flex items-center gap-2">
                <button onClick={() => setOpen(true)}>
                  <img
                    src="/assets/svg/remove.svg"
                    alt=""
                    className="w-4 cursor-pointer"
                  />
                </button>
                <GenericDeleteDialog
                  isOpen={open}
                  setIsOpen={setOpen}
                  deleteAction={deleteImage}
                  item={item}
                  entityName="image"
                />
                <Switch
                  {...label}
                  defaultChecked
                  onChange={handleUpdateImage}
                  checked={item?.isActive}
                  disabled={isLoading}
                />
                <ImageView item={item} />
              </div>
            </div>
          </div>
        </div>
        <span
          className={` ${
            item?.isPrivate ? "bg-[#C5952C]" : " bg-[#879C8B]"
          } text-sm text-white absolute right-0 top-0 rounded-tr-lg rounded-bl-lg px-4 py-1`}
        >
          {item?.isPrivate ? "Offline" : "Public"}
        </span>
      </div>
    </div>
  );
}
