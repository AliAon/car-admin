import GenericDeleteDialog from "@/components/generic-delete-dialog";
import { Card, CardContent } from "@/components/ui/card";
import {
  useDeleteServiceMutation,
  useGetServiceByIdQuery,
  useUpdateServiceMutation,
} from "@/lib/services/service-api/service-api";
import { Switch } from "@mui/material";
import React from "react";
import toast from "react-hot-toast";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import AddService from "../../topbar/add-service";

const label = { inputProps: { "aria-label": "Switch demo" } };

const ServiceItem = ({ service, index }) => {
  const [open, setOpen] = React.useState(false);
  const deleteService = useDeleteServiceMutation();
  const [updateService, { isLoading }] = useUpdateServiceMutation();
  const { data } = useGetServiceByIdQuery(service?._id, {
    skip: !service?._id,
  });

  const handleUpdateService = () => {
    updateService({ data: { isShow: !service?.isShow }, id: service?._id })
      .unwrap()
      .then((res) => {
        toast.success(res.message);
      })
      .catch((err) => {
        toast.error(err?.data?.message);
      });
  };

  return (
    <div>
      <Card
        key={index}
        className="bg-transparent border-none overflow-hidden rounded-none shadow-none"
      >
        <CardContent className="pl-1">
          <img
            src={service?.image || "/placeholder.svg"}
            alt={service?.title}
            className="object-cover h-[200px] w-full"
          />

          <h3 className="text-white text-xl font-semibold mb-4 mt-4">
            {service?.title}
          </h3>
          <div
            dangerouslySetInnerHTML={{ __html: service?.content }}
            className="text-white prose prose-invert"
          ></div>
          <div className="flex items-center justify-between">
            <button className="flex items-center text-[#FFFFFF] transition-colors text-sm font-medium">
              Explore More
              <IoArrowForwardCircleOutline className="ml-2" size={25} />
            </button>
            <div className="flex items-center gap-1">
              <Switch
                {...label}
                defaultChecked
                onChange={handleUpdateService}
                checked={service?.isShow}
                disabled={isLoading}
              />
              <div>
                <button onClick={() => setOpen(true)}>
                  <img
                    src="/assets/svg/remove.svg"
                    alt=""
                    className="w-5 cursor-pointer pt-2"
                  />
                </button>
                <GenericDeleteDialog
                  item={service}
                  entityName="Service"
                  deleteAction={deleteService}
                  isOpen={open}
                  setIsOpen={setOpen}
                />
              </div>
              <div>
                <AddService isEdit={true} formData={data?.data} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceItem;
