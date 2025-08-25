import { SkeletonCard } from "@/components/card-skeleton";
import PaginationRounded from "../../pagination";
import VehicleItem from "./vehicle-item";

export default function VehiclesList({
  vehicleData,
  isLoading,
  setPage,
  page,
}) {
  const { total, totalPages } = vehicleData?.data || {};
  return (
    <div>
      <div className="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-10">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        ) : vehicleData?.data?.vehicles?.length > 0 ? (
          vehicleData?.data?.vehicles?.map((item, index) => {
            return (
              <VehicleItem
                key={index}
                img={item?.images[0]}
                title={item.vehicleDescription}
                speed={`${item?.fuelType} | 10/2022 | ${item?.enginePowerKW} Km`}
                price={item.price}
                availble={item.availble}
                vehicleId={item._id}
                item={item}
              />
            );
          })
        ) : (
          <p className="text-white text-center col-span-12 py-2">
            No vehicle found
          </p>
        )}
      </div>
      <div>
        <PaginationRounded
          totalPages={totalPages}
          page={page}
          onChange={(event, page) => {
            setPage(page);
          }}
        />
      </div>
    </div>
  );
}
