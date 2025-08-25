import GalleryList from "@/components/car-views/gallery-vehicle/gallery-list";
import TopBar from "@/components/car-views/gallery-vehicle/top-bar";
import { useGetImagesQuery } from "@/lib/services/image-api/image-api";
import { useEffect, useState } from "react";

export default function GalleryShowcase() {
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

  const { data: imagesData, isLoading } = useGetImagesQuery({
    query: debouncedQuery,
    page: page,
    filters: filters,
  });
  return (
    <div className=" flex flex-col gap-10">
      {/* Top Bar*/}
      <TopBar
        totalResult={imagesData?.data?.images?.length}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        filters={filters}
        setFilters={setFilters}
        setPage={setPage}
      />
      {/* Vehicle Picture List*/}
      <GalleryList
        imagesData={imagesData}
        isLoading={isLoading}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}
