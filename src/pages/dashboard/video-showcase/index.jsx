import TopBar from "@/components/car-views/video-vehicle/top-bar";
import VideoList from "@/components/car-views/video-vehicle/video-list";
import { useGetVideosQuery } from "@/lib/services/videos-api";
import { useEffect, useState } from "react";

export default function VideoShowcase() {
  const [searchQuery, setSearchQuery] = useState("");
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

  const { data: videoData, isLoading } = useGetVideosQuery({
    query: searchQuery,
    page: page,
    filters: filters,
  });

  return (
    <div className=" flex flex-col gap-10">
      {/* Top Bar*/}
      <TopBar
        totalResult={videoData?.data?.videos?.length}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        filters={filters}
        setFilters={setFilters}
        setPage={setPage}
      />
      {/* Vehicle Video List*/}
      <VideoList
        videoData={videoData}
        isLoading={isLoading}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}
