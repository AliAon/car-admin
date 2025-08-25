import ServiceList from "@/components/car-views/services/service-list";
import TopBar from "@/components/car-views/services/topbar";
import { useGetAllServicesQuery } from "@/lib/services/service-api/service-api";
import { useEffect, useState } from "react";

export default function Services() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  const { data: services } = useGetAllServicesQuery({
    query: debouncedQuery,
    page: page,
  });
  return (
    <div>
      <TopBar
        totalResult={services?.data?.services?.length}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div className="bg-[#181818] pt-5">
        <ServiceList
          services={services?.data?.services}
          page={page}
          setPage={setPage}
          totalPages={services?.data?.totalPages}
        />
      </div>
    </div>
  );
}
