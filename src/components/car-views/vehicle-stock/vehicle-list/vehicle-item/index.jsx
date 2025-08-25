import React from "react";
import { Button } from "../../../../ui/button";
import { Heart } from "lucide-react";
import GenericDeleteDialog from "../../../../generic-delete-dialog";
import {
  useAddWishlistMutation,
  useDeleteVehicleMutation,
  useUpdateServiceStatusMutation,
} from "@/lib/services/vehicle-api";
import { ViewVehicle } from "./view-vehicle";
import toast from "react-hot-toast";
import { FaHeart } from "react-icons/fa";
import { Switch } from "@mui/material";
import { formatDate } from "@/lib/date";
import { AddVehicle } from "../../top-bar/add-vehicle";

export default function VehicleItem({
  img,
  title,
  speed = "Gasoil | 10/2022 | 9.800 Km",
  price,
  availble = "Public",
  vehicleId,
  item,
}) {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [open, setOpen] = React.useState(false);
  const [openView, setOpenView] = React.useState(false);
  const deleteVehicle = useDeleteVehicleMutation(vehicleId);
  const [addWhishList] = useAddWishlistMutation();
  const [updateVehicleStatus, { isLoading }] = useUpdateServiceStatusMutation();

  const handleAddWhishList = () => {
    addWhishList({
      data: { isWishlist: item.isWishlist ? false : true },
      id: vehicleId,
    })
      .unwrap()
      .then(() => {
        if (item.isWishlist) {
          toast.success("Removed from wishlist");
        } else {
          toast.success("Added to wishlist");
        }
      })
      .catch((error) => {
        toast.error(error.data.message);
      });
  };

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
        <img
          src={item?.images?.[0]}
          alt=""
          className="lg:rounded-l-lg rounded-l-lg lg:rounded-r-none rounded-r-lg  object-cover h-full w-full"
        />
      </div>
      <div className="relative lg:col-span-8 col-span-12 p-4">
        <div className="flex  flex-col h-full justify-between gap-3">
          <h2 className="text-white font-bold uppercase leading-5 text-sm max-w-64 pt-5">
            {item?.model}
          </h2>
          <div>
            <p className="text-xs text-[#696969]">{`${
              item?.fuelType
            } | ${formatDate(item?.dateFirstRegistrationB)} | ${
              item?.Condition?.mileage || "0"
            }`}</p>
            {/*Price Euro*/}
            <span className="text-primary font-bold">
              {price?.priceOnRequest
                ? "Price on Request"
                : `${price?.priceCHF} CHF`}
            </span>
            <hr className="bg-primary border-t border-[#998256] " />
            <div className="flex items-center justify-between">
              <Button
                size="sm"
                className="text-[#696969] px-2 py-0 hover:text-white w-fit bg-transparent capitalize text-xs"
                onClick={handleAddWhishList}
              >
                {item?.isWishlist ? (
                  <FaHeart className="w-4 h-4 text-red-500" />
                ) : (
                  <Heart className="w-4 h-4" />
                )}
                {item?.isWishlist ? "Remove from" : "Add to"} Wishlist
              </Button>
              <div className="flex items-center gap-1">
                <button onClick={() => setOpen(true)}>
                  <img
                    src="/assets/svg/remove.svg"
                    alt=""
                    className="w-4 cursor-pointer"
                  />
                </button>
                <Switch
                  {...label}
                  defaultChecked
                  onChange={handleUpdateService}
                  checked={item?.isActive}
                  disabled={isLoading}
                />
                <GenericDeleteDialog
                  item={item}
                  entityName="vehicle"
                  deleteAction={deleteVehicle}
                  isOpen={open}
                  setIsOpen={setOpen}
                />
                <ViewVehicle
                  vehicleId={vehicleId}
                  isOpen={openView}
                  setIsOpen={setOpenView}
                />
                <AddVehicle isEdit={true} formData={item} />
              </div>
            </div>
          </div>
        </div>
        <span
          className={` ${
            availble == "Offline" ? "bg-[#C5952C]" : " bg-[#879C8B]"
          } text-sm text-white absolute right-0 top-0 rounded-tr-lg rounded-bl-lg px-4 py-1`}
        >
          {availble}
        </span>
      </div>
    </div>
  );
}
