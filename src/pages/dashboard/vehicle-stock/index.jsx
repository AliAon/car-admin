import { useEffect, useState } from "react";
import TopBar from "@/components/car-views/vehicle-stock/top-bar";
import VehiclesList from "@/components/car-views/vehicle-stock/vehicle-list";
import { useGetVehiclesQuery } from "@/lib/services/vehicle-api";

export default function VehicleStock() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    active: false,
    inactive: false,
    deleted: false,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  const { data: vehicleData, isLoading } = useGetVehiclesQuery({
    query: debouncedQuery,
    page: page,
    filters: filters,
  });

  return (
    <div className="flex flex-col gap-10">
      <TopBar
        totalResult={vehicleData?.data?.vehicles?.length}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        filters={filters}
        setFilters={setFilters}
        setPage={setPage}
      />
      <VehiclesList
        vehicleData={vehicleData}
        isLoading={isLoading}
        setPage={setPage}
        page={page}
      />
    </div>
  );
}
