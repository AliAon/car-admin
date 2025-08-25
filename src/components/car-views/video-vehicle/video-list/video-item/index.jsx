import React, { useState } from "react";
import GenericDeleteDialog from "../../../../generic-delete-dialog";
import ViewVideo from "./view-video";
import { useDeleteVideoMutation, useUpdateVehicleStatusMutation } from "@/lib/services/videos-api";
import { Switch } from "@mui/material";
import toast from "react-hot-toast";

export default function VideoItem({ item }) {
  const [open, setOpen] = useState(false);
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const deleteVideo = useDeleteVideoMutation();
  const [updateVehicleStatus, {isLoading}] = useUpdateVehicleStatusMutation();

  const totalSize = item?.videos?.reduce(
    (total, image) => total + image.bytes,
    0
  );

  const handleUpdateService = () => {
    updateVehicleStatus({ id: item?._id, data: { isActive: !item?.isActive } })
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
        <video
          src={item?.videos?.[0]?.url}
          alt=""
          className="lg:rounded-l-lg rounded-l-lg lg:rounded-r-none rounded-r-lg  object-cover h-[200px] w-full"
        />
      </div>
      <div className="relative lg:col-span-8 col-span-12 p-4">
        <div className="flex  flex-col gap-2 justify-between h-full">
          <h2 className="text-white leading-5 text-sm max-w-64 uppercase font-bold">
            {item?.name}
          </h2>
          <div>
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
                    className="cursor-pointer"
                  />
                </button>
                <GenericDeleteDialog
                  isOpen={open}
                  setIsOpen={setOpen}
                  deleteAction={deleteVideo}
                  item={item}
                  entityName="video"
                />
                <Switch
                  {...label}
                  defaultChecked
                  onChange={handleUpdateService}
                  checked={item?.isActive}
                  disabled={isLoading}
                />
                <ViewVideo item={item} />
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
